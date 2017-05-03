package tabletop.domain.match.tournament;

import tabletop.domain.user.User;

import java.util.*;
import java.util.stream.Collectors;

public class SwissTournament {

    private List<User> players;
    private boolean ranked;

    private Map<User, Integer> playerResult;
    private Map<User, Set<User>> playerHistory;
    private User byeUser;

    public SwissTournament(List<User> players, Boolean ranked) {
        this.players = players;
        this.ranked = ranked;
        this.playerResult = new HashMap<>();
        this.playerHistory = new HashMap<>();
        for (User player:players) {
            this.playerResult.put(player, 0);
            this.playerHistory.put(player, new HashSet<User>());
        }

    }

    public List<Pair<User>> getInitialPairs() {
        if (!ranked) {
            // random seeding
            Collections.shuffle(players, new Random(System.nanoTime()));
        }

        // initial pairing
        List<Pair<User>> pairs = new LinkedList<>();
        for (int i = 0; i < players.size(); i+=2) {
            if (i+1 < players.size()) {
                Pair pair = new Pair(players.get(i), players.get(i+1));
                pairs.add(pair);
                playerHistory.get(players.get(i)).add(players.get(i+1));
                playerHistory.get(players.get(i+1)).add(players.get(i));
            } else {
                byeUser = players.get(i);
            }
        }
        return pairs;
    }

    public List<Pair<User>> getNextPair(List<User> winners) {
        for (User winner:winners) {
            playerResult.put(winner, playerResult.get(winner)+1);
        }
        Collections.shuffle(players, new Random(System.nanoTime()));
        List<User> orderedPlayers = playerResult.entrySet().stream().filter(e -> e.getValue() != 0).sorted(Map.Entry.comparingByValue()).map(Map.Entry::getKey).collect(Collectors.toList());
        List<User> shuffledPlayersZero = playerResult.entrySet().stream().filter(e->e.getValue() == 0).map(Map.Entry::getKey).collect(Collectors.toList());
        Collections.shuffle(shuffledPlayersZero, new Random(System.nanoTime()));

        orderedPlayers.addAll(shuffledPlayersZero);

        List<Pair<User>> pairs = new LinkedList<>();

        while (orderedPlayers.size() > 0) {
            User player = orderedPlayers.remove(0);
            for (User playerToMatch:orderedPlayers) {
                if (!playerHistory.get(player).contains(playerToMatch)) {
                    Pair pair = new Pair(player, playerToMatch);
                    pairs.add(pair);
                    orderedPlayers.remove(playerToMatch);
                    playerHistory.get(player).add(playerToMatch);
                    playerHistory.get(playerToMatch).add(player);
                    break;
                }
            }
        }

        return  pairs;
    }

}
