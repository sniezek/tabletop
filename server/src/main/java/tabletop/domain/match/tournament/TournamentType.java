package tabletop.domain.match.tournament;

import com.google.common.collect.Sets;
import tabletop.domain.game.Game;

import java.util.Set;

import static tabletop.domain.game.Game.CHESS;

public enum TournamentType {
    SWISS(CHESS);

    private final Set<Game> allowedGames;

    TournamentType(Game... allowedGames) {
        this.allowedGames = Sets.newHashSet(allowedGames);
    }
}
