package tabletop.controllers.event.dto;

import tabletop.domain.match.Sparring;
import tabletop.domain.user.User;

import java.util.Optional;

class EventSparringDto extends EventMatchDto {
    private final String gameName;

    EventSparringDto(Sparring sparring, Optional<User> user, User organiser) {
        super(sparring.getId(), sparring.getStartDate(), sparring.getEndDate(), sparring.getUsers(), sparring.getGame(), sparring.getMinPlayers(), sparring.getMaxPlayers(), sparring.getPending(), sparring.getDiscarded(), user, organiser);
        this.gameName = sparring.getGameName();
    }

    public String getGameName() {
        return gameName;
    }
}
