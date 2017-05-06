package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.Tournament;
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
                swissTournamentProcess.getResultByUser(user1).ifPresent(result -> result.getUsersPlayed().add(user2));
                swissTournamentProcess.getResultByUser(user2).ifPresent(result -> result.getUsersPlayed().add(user1));
            } else {
                swissTournamentProcess.setByeUser(swissTournamentProcess.getUsers().get(i));
            }
        }
        return pairs;
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
                    swissTournamentProcess.getResultByUser(player).ifPresent(result2 -> result2.getUsersPlayed().add(playerToMatch));
                    swissTournamentProcess.getResultByUser(playerToMatch).ifPresent(result2 -> result2.getUsersPlayed().add(player));
                    break;
                }
            }
        }

        return pairs;
    }

}
