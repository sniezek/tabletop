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
                if (!isUserAvailable(swissTournamentProcess.getResultByUser(user1)) && isUserAvailable(swissTournamentProcess.getResultByUser(user2))) {
                    setWinner(swissTournamentProcess, user2);
                } else if (isUserAvailable(swissTournamentProcess.getResultByUser(user1)) && !isUserAvailable(swissTournamentProcess.getResultByUser(user2))) {
                    setWinner(swissTournamentProcess, user1);
                } else {
                    swissTournamentProcess.getResultByUser(user1).ifPresent(res -> setInitialResult(user2, res));
                    swissTournamentProcess.getResultByUser(user2).ifPresent(res -> setInitialResult(user1, res));
                }
            } else {
                swissTournamentProcess.setByeUser(users.get(i));
            }

        }
        swissTournamentProcess.setInitialized(true);
        return pairs;
    }

    private void setInitialResult(User user1, SwissPlayerResult result) {
        result.getUsersPlayed().add(user1);
        result.setCurrentOpponent(user1);
        result.setCurrentScore(0);
    }

    public void setWinner(SwissTournamentProcess swissTournamentProcess, User winner) {
        Optional<SwissPlayerResult> resultOptional = swissTournamentProcess.getResultByUser(winner);
        resultOptional.ifPresent(result -> handleSetWinner(swissTournamentProcess, result));
    }

    private void handleSetWinner(SwissTournamentProcess swissTournamentProcess, SwissPlayerResult result) {
        result.win();
        User loser = result.getUsersPlayed().get(result.getUsersPlayed().size() - 1);
        swissTournamentProcess.getResultByUser(loser).ifPresent(SwissPlayerResult::lose);
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
                    resultsOrdered.remove(resultGuest);
                    setInitialResult(resultGuest.getId().getUser(), resultHost);
                    setInitialResult(resultHost.getId().getUser(), resultGuest);
                    if (!resultHost.isAvailable() && resultGuest.isAvailable()) {
                        setWinner(swissTournamentProcess, resultGuest.getId().getUser());
                    } else if (resultHost.isAvailable() && !resultGuest.isAvailable()) {
                        setWinner(swissTournamentProcess, resultHost.getId().getUser());
                    } else {
                        pairs.add(pair);
                    }
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
            Optional<SwissPlayerResult> opponentResult = swissTournamentProcess.getResultByUser(result.getCurrentOpponent());
            if (isPairToAdd(hosts, result, opponentResult)) {
                state.add(getResultPair(result, opponentResult));
                hosts.add(result.getId().getUser());
            }
        });
        return state;
    }

    private boolean isPairToAdd(Set<User> hosts, SwissPlayerResult result, Optional<SwissPlayerResult> opponentResult) {
        return !hosts.contains(result.getCurrentOpponent())
                && result.isAvailable() &&
                opponentResult.map(SwissPlayerResult::isAvailable).orElse(false);
    }

    private Pair<User> getResultPair(SwissPlayerResult result, Optional<SwissPlayerResult> opponentResult) {
        return new Pair<>(
                result.getId().getUser(),
                result.getCurrentOpponent(),
                !result.isAvailable() && !isUserAvailable(opponentResult) ? 2 : result.getCurrentScore(),
                result.getResult(),
                opponentResult.map(SwissPlayerResult::getResult).orElse(0));
    }

    public boolean canBeFinished(SwissTournamentProcess swissTournamentProcess) {
        return swissTournamentProcess.getRounds() <= swissTournamentProcess.getPlayerResults().get(0).getUsersPlayed().size();
    }

    public List<TournamentPlayerResult> getTournamentPlayerResults(Tournament tournament) {
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

    public void giveUp(Tournament tournament, User user) {
        SwissTournamentProcess swissTournamentProcess = (SwissTournamentProcess) tournament.getTournamentProcess();
        Optional<SwissPlayerResult> resultOptional = swissTournamentProcess.getResultByUser(user);
        resultOptional.ifPresent(result -> handleGiveUp(swissTournamentProcess, result));
    }

    private void handleGiveUp(SwissTournamentProcess swissTournamentProcess, SwissPlayerResult result) {
        result.setIsAvailable(false);
        if (result.getCurrentScore().equals(0)) {
            result.lose();
            swissTournamentProcess.getResultByUser(result.getCurrentOpponent())
                    .filter(SwissPlayerResult::isAvailable)
                    .ifPresent(SwissPlayerResult::win);
        }
    }

    public boolean isUserAvailable(Optional<SwissPlayerResult> resultOptional) {
        return resultOptional
                .map(SwissPlayerResult::isAvailable)
                .orElse(false);
    }

    public boolean isUserAvailable(Tournament tournament, User user) {
        SwissTournamentProcess swissTournamentProcess = (SwissTournamentProcess) tournament.getTournamentProcess();
        Optional<SwissPlayerResult> resultOptional = swissTournamentProcess.getResultByUser(user);
        return resultOptional
                .map(SwissPlayerResult::isAvailable)
                .orElse(false);
    }
}
