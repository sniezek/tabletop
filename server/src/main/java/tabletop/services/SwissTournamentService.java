package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.swiss.SwissPlayerResult;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class SwissTournamentService {

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
        swissTournamentProcess.getResultByUser(winner).ifPresent(SwissPlayerResult::win);
    }

    public List<Pair<User>> getNextPair(SwissTournamentProcess swissTournamentProcess) {

        Collections.shuffle(swissTournamentProcess.getUsers(), new Random(System.nanoTime()));
        List<User> orderedPlayers = swissTournamentProcess.getPlayerResults().stream()
                .filter(e -> e.getResult() != 0)
                .sorted(Comparator.comparingInt(SwissPlayerResult::getResult))
                .map(result -> result.getId().getUser())
                .collect(Collectors.toList());

        List<User> shuffledPlayersZero = swissTournamentProcess.getPlayerResults().stream()
                .filter(e -> e.getResult() == 0)
                .map(result -> result.getId().getUser())
                .collect(Collectors.toList());

        Collections.shuffle(shuffledPlayersZero, new Random(System.nanoTime()));

        orderedPlayers.addAll(shuffledPlayersZero);

        List<Pair<User>> pairs = new LinkedList<>();

        while (orderedPlayers.size() > 0) {
            User player = orderedPlayers.remove(0);
            for (User playerToMatch : orderedPlayers) {
                Optional<SwissPlayerResult> result = swissTournamentProcess.getResultByUser(player);
                if (result.isPresent() && !result.get().getUsersPlayed().contains(playerToMatch)) {
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

}
