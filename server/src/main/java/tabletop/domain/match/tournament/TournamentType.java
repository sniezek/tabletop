package tabletop.domain.match.tournament;

import com.google.common.collect.Sets;
import tabletop.domain.game.Game;

import java.util.Set;

public enum TournamentType {
    SWISS(Game.CHESS);

    private final Set<Game> allowedGames;

    TournamentType(Game... chess) {
        this.allowedGames = Sets.newHashSet(chess);
    }
}
