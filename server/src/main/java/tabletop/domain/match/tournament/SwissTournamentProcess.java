package tabletop.domain.match.tournament;

import javax.persistence.Convert;
import javax.persistence.Entity;
import java.util.*;
import java.util.stream.Collectors;

@Entity
public class SwissTournamentProcess extends TournamentProcess {

    @Convert(converter = IntegerListConverter.class)
    private List<Integer> players;
    private boolean ranked;
    @Convert(converter = IntegerMapConverter.class)
    private Map<Integer, Integer> playerResult;
    @Convert(converter = IntegerSetConverter.class)
    private Map<Integer, Set<Integer>> playerHistory;
    private Integer byeUser;

    public List<Pair<Integer>> getInitialPairs() {
        if (!ranked) {
            // random seeding
            Collections.shuffle(players, new Random(System.nanoTime()));
        }

        // initial pairing
        List<Pair<Integer>> pairs = new LinkedList<>();
        for (int i = 0; i < players.size(); i += 2) {
            if (i + 1 < players.size()) {
                Pair pair = new Pair(players.get(i), players.get(i + 1));
                pairs.add(pair);
                playerHistory.get(players.get(i)).add(players.get(i + 1));
                playerHistory.get(players.get(i + 1)).add(players.get(i));
            } else {
                byeUser = players.get(i);
            }
        }
        return pairs;
    }

    public List<Pair<Integer>> getNextPair(List<Integer> winners) {
        for (Integer winner : winners) {
            playerResult.put(winner, playerResult.get(winner) + 1);
        }
        Collections.shuffle(players, new Random(System.nanoTime()));
        List<Integer> orderedPlayers = playerResult.entrySet().stream().filter(e -> e.getValue() != 0).sorted(Map.Entry.comparingByValue()).map(Map.Entry::getKey).collect(Collectors.toList());
        List<Integer> shuffledPlayersZero = playerResult.entrySet().stream().filter(e -> e.getValue() == 0).map(Map.Entry::getKey).collect(Collectors.toList());
        Collections.shuffle(shuffledPlayersZero, new Random(System.nanoTime()));

        orderedPlayers.addAll(shuffledPlayersZero);

        List<Pair<Integer>> pairs = new LinkedList<>();

        while (orderedPlayers.size() > 0) {
            Integer player = orderedPlayers.remove(0);
            for (Integer playerToMatch : orderedPlayers) {
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

        return pairs;
    }
}
