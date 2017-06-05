package tabletop.controllers.event.dto;

import tabletop.domain.match.Sparring;

class EventSparringDto extends EventMatchDto {
    private final String gameName;

    EventSparringDto(Sparring sparring) {
        super(sparring.getId(), sparring.getStartDate(), sparring.getEndDate(), sparring.getUsers(), sparring.getGame(), sparring.getMinPlayers(), sparring.getMaxPlayers(), sparring.getPending(), sparring.getDiscarded());
        this.gameName = sparring.getGameName();
    }

    public String getGameName() {
        return gameName;
    }
}
