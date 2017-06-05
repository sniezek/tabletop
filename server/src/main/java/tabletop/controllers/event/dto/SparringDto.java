package tabletop.controllers.event.dto;

import tabletop.domain.game.Game;
import tabletop.domain.user.User;

import java.util.Date;
import java.util.Set;

class SparringDto extends MatchDto {
    private final String gameName;

    SparringDto(String gameName, Date startDate, Date endDate, Set<User> users, Game game, Integer minPlayers, Integer maxPlayers) {
        super(startDate, endDate, users, game, minPlayers, maxPlayers);
        this.gameName = gameName;
    }

    public String getGameName() {
        return gameName;
    }
}
