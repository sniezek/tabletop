package tabletop.controllers.event.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import tabletop.domain.game.Game;
import tabletop.domain.match.tournament.TournamentType;
import tabletop.domain.user.User;

import java.util.Date;
import java.util.Set;

class TournamentDto extends MatchDto {
    private final String name;
    private final TournamentType type;

    TournamentDto(String name, TournamentType type, Date startDate, Date endDate, Set<User> users, Game game, Integer minPlayers, Integer maxPlayers) {
        super(startDate, endDate, users, game, minPlayers, maxPlayers);
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public TournamentType getType() {
        return type;
    }
}
