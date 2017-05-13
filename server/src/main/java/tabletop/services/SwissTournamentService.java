package tabletop.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentPlayerResult;
import tabletop.domain.match.tournament.swiss.SwissPlayerResult;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class SwissTournamentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SwissTournamentService.class);


    public List<Pair<User>> getInitialPairs(SwissTournamentProcess swissTournamentProcess) {

        List<User> users = swissTournamentProcess.getUsers();
        if (!swissTournamentProcess.isRanked()) {
            // random seeding
            shuffleUsers(users);
        }

        // initial pairing
        List<Pair<User>> pairs = new LinkedList<>();
        for (int i = 0; i < users.size(); i += 2) {
            if (i + 1 < users.size()) {
                User user1 = users.get(i);
                User user2 = users.get(i + 1);
                Pair<User> pair = new Pair<>(user1, user2);
                pairs.add(pair);
                setInitialResult(user2, swissTournamentProcess.getResultByUser(user1));
                setInitialResult(user1, swissTournamentProcess.getResultByUser(user2));
            } else {
                swissTournamentProcess.setByeUser(users.get(i));
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
        SwissPlayerResult result = swissTournamentProcess.getResultByUser(winner);
        result.win();
        User loser = result.getUsersPlayed().get(result.getUsersPlayed().size() - 1);
        swissTournamentProcess.getResultByUser(loser).lose();
    }

    public List<Pair<User>> getNextPair(SwissTournamentProcess swissTournamentProcess) {

        shuffleUsers(swissTournamentProcess.getUsers());
        List<SwissPlayerResult> resultsOrdered = swissTournamentProcess.getPlayerResults().stream()
                .sorted(Comparator.comparingInt(SwissPlayerResult::getResult))
                .collect(Collectors.toList());


        List<Pair<User>> pairs = new LinkedList<>();

        LOGGER.info("Players sorted: " + resultsOrdered.toString());

        while (resultsOrdered.size() > 0) {
            SwissPlayerResult resultHost = resultsOrdered.remove(0);
            for (SwissPlayerResult resultGuest : resultsOrdered) {
                if (!resultGuest.getUsersPlayed().contains(resultHost.getId().getUser())) {
                    Pair<User> pair = new Pair<>(
                            resultHost.getId().getUser(),
                            resultGuest.getId().getUser(),
                            resultHost.getResult(),
                            resultGuest.getResult());
                    pairs.add(pair);
                    resultsOrdered.remove(resultGuest);
                    setInitialResult(resultGuest.getId().getUser(), resultHost);
                    setInitialResult(resultHost.getId().getUser(), resultGuest);
                    break;
                }
            }
        }

        return pairs;
    }

    private void shuffleUsers(List<User> users) {
        Collections.shuffle(users, new Random(System.nanoTime()));
    }

    public List<Pair<User>> getCurentState(SwissTournamentProcess swissTournamentProcess) {
        List<Pair<User>> state = new ArrayList<>();
        Set<User> hosts = new HashSet<>();
        swissTournamentProcess.getPlayerResults().forEach(result -> {
            if (!hosts.contains(result.getCurrentOpponent())) {
                state.add(new Pair<>(
                        result.getId().getUser(),
                        result.getCurrentOpponent(),
                        result.getCurrentScore(),
                        result.getResult(),
                        swissTournamentProcess.getResultByUser(result.getCurrentOpponent()).getResult()));
                hosts.add(result.getId().getUser());
            }
        });
        return state;
    }

    public boolean canBeFinished(SwissTournamentProcess swissTournamentProcess) {
        return swissTournamentProcess.getRounds() <= swissTournamentProcess.getPlayerResults().get(0).getUsersPlayed().size();
    }

    public List<TournamentPlayerResult> getFinalResults(Tournament tournament) {
        List<TournamentPlayerResult> tournamentPlayerResultList = new LinkedList<>();
        List<SwissPlayerResult> playerResults = getPlayerResultsSortedByPoints((SwissTournamentProcess) tournament.getTournamentProcess());

        for (SwissPlayerResult swissPlayerResult : playerResults) {
            TournamentPlayerResult result = new TournamentPlayerResult();
            result.setTournament(tournament);
            result.setUser(swissPlayerResult.getId().getUser());
            result.setPoints(swissPlayerResult.getResult());
            tournamentPlayerResultList.add(result);
        }

        return setPlaces(tournamentPlayerResultList);
    }

    private List<SwissPlayerResult> getPlayerResultsSortedByPoints(SwissTournamentProcess swissTournamentProcess) {
        List<SwissPlayerResult> swissPlayerResults = swissTournamentProcess.getPlayerResults();
        Comparator<SwissPlayerResult> resultComparator = Comparator.comparing(SwissPlayerResult::getResult).thenComparing(SwissPlayerResult::getUserId);
        swissPlayerResults.sort(resultComparator);
        return swissPlayerResults;
    }

    private List<TournamentPlayerResult> setPlaces(List<TournamentPlayerResult> results) {
        results.get(results.size() - 1).setPlace(1);
        for (int i = results.size() - 2; i >= 0; i--) {
            if (results.get(i + 1).getPoints() == results.get(i).getPoints()) {
                results.get(i).setPlace(results.get(i + 1).getPlace());
            } else {
                results.get(i).setPlace(results.get(i + 1).getPlace() + 1);
            }
        }
        return results;
    }

}
