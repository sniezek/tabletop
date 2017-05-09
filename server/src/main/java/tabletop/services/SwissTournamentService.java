package tabletop.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import tabletop.controllers.TournamentController;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentFinalResult;
import tabletop.domain.match.tournament.swiss.SwissPlayerResult;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class SwissTournamentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SwissTournamentService.class);


    public List<Pair<User>> getInitialPairs(SwissTournamentProcess swissTournamentProcess) {
        if (!swissTournamentProcess.isRanked()) {
            // random seeding
            Collections.shuffle(swissTournamentProcess.getUsers(), new Random(System.nanoTime()));
        }

        // initial pairing
        List<Pair<User>> pairs = new LinkedList<>();
        for (int i = 0; i < swissTournamentProcess.getUsers().size(); i += 2) {
            if (i + 1 < swissTournamentProcess.getUsers().size()) {
                User user1 = swissTournamentProcess.getUsers().get(i);
                User user2 = swissTournamentProcess.getUsers().get(i + 1);
                Pair<User> pair = new Pair<>(user1, user2);
                pairs.add(pair);
                swissTournamentProcess.getResultByUser(user1).ifPresent(result -> setInitialResult(user2, result));
                swissTournamentProcess.getResultByUser(user2).ifPresent(result -> setInitialResult(user1, result));
            } else {
                swissTournamentProcess.setByeUser(swissTournamentProcess.getUsers().get(i));
            }

        }
        return pairs;
    }

    private void setInitialResult(User user1, SwissPlayerResult result) {
        result.getUsersPlayed().add(user1);
        result.setCurrentOpponent(user1);
        result.setCurrentScore(0);
    }

    public void setWinner(SwissTournamentProcess swissTournamentProcess, User winner) {
        Optional<SwissPlayerResult> result = swissTournamentProcess.getResultByUser(winner);
        if (result.isPresent()) {
            result.get().win();
            User loser = result.get().getUsersPlayed().get(result.get().getUsersPlayed().size() - 1);
            swissTournamentProcess.getResultByUser(loser).ifPresent(SwissPlayerResult::lose);
        }
    }

    public List<Pair<User>> getNextPair(SwissTournamentProcess swissTournamentProcess) {

        Collections.shuffle(swissTournamentProcess.getUsers(), new Random(System.nanoTime()));
        List<User> orderedPlayers = swissTournamentProcess.getPlayerResults().stream()
                .sorted(Comparator.comparingInt(SwissPlayerResult::getResult))
                .map(result -> result.getId().getUser())
                .collect(Collectors.toList());

        List<Pair<User>> pairs = new LinkedList<>();

        LOGGER.info("Players sorted: " + orderedPlayers.toString());

        while (orderedPlayers.size() > 0) {
            User player = orderedPlayers.remove(0);
            for (User playerToMatch : orderedPlayers) {
                Optional<SwissPlayerResult> result = swissTournamentProcess.getResultByUser(playerToMatch);
                if (result.isPresent() && !result.get().getUsersPlayed().contains(player)) {
                    Pair<User> pair = new Pair<>(player, playerToMatch);
                    pairs.add(pair);
                    orderedPlayers.remove(playerToMatch);
                    swissTournamentProcess.getResultByUser(player).ifPresent(result2 -> setInitialResult(playerToMatch, result2));
                    swissTournamentProcess.getResultByUser(playerToMatch).ifPresent(result2 -> setInitialResult(player, result2));
                    break;
                }
            }
        }

        return pairs;
    }

    public Map<Pair<User>, Integer> getCurentState(SwissTournamentProcess swissTournamentProcess) {
        Map<Pair<User>, Integer> state = new HashMap<>();
        Set<User> hosts = new HashSet<>();
        swissTournamentProcess.getPlayerResults().forEach(result -> {
            if (!hosts.contains(result.getCurrentOpponent())) {
                state.put(new Pair<>(result.getId().getUser(), result.getCurrentOpponent()), result.getCurrentScore());
                hosts.add(result.getId().getUser());
            }
        });
        return state;
    }

    public boolean canBeFinished(SwissTournamentProcess swissTournamentProcess) {
        return swissTournamentProcess.getRounds() <= swissTournamentProcess.getPlayerResults().get(0).getUsersPlayed().size();
    }

    public List<TournamentFinalResult> getFinalResults(Tournament tournament){
        List<TournamentFinalResult> tournamentFinalResultList = new LinkedList<>();
        List<SwissPlayerResult> playerResults = getPlayerResultsSortedByPoints((SwissTournamentProcess) tournament.getTournamentProcess());

        for (SwissPlayerResult swissPlayerResult: playerResults) {
            TournamentFinalResult result = new TournamentFinalResult();
            result.setTournament(tournament);
            result.setUser(swissPlayerResult.getId().getUser());
            result.setPoints(swissPlayerResult.getResult());
            tournamentFinalResultList.add(result);
        }

        return setPlaces(tournamentFinalResultList);
    }

    private List<SwissPlayerResult> getPlayerResultsSortedByPoints(SwissTournamentProcess swissTournamentProcess) {
        List<SwissPlayerResult> swissPlayerResults = swissTournamentProcess.getPlayerResults();
        Comparator<SwissPlayerResult> resultComparator = Comparator.comparing(SwissPlayerResult::getResult).thenComparing(SwissPlayerResult::getUserId);
        swissPlayerResults.sort(resultComparator);
        return swissPlayerResults;
    }

    private List<TournamentFinalResult> setPlaces(List<TournamentFinalResult> results) {
        results.get(results.size()-1).setPlace(1);
        for (int i=results.size()-2; i>=0; i--){
            if (results.get(i+1).getPoints() == results.get(i).getPoints()){
                results.get(i).setPlace(results.get(i+1).getPlace());
            } else {
                results.get(i).setPlace(results.get(i+1).getPlace()+1);
            }
        }
        return results;
    }

}
