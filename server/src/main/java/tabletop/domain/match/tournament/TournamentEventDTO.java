package tabletop.domain.match.tournament;

import tabletop.domain.event.Event;

public class TournamentEventDTO {
    private Long tournamentId;
    private String tournamentName;
    private Long eventId;
    private String eventName;

    public TournamentEventDTO(Tournament tournament, Event event) {
        this.tournamentId = tournament.getId();
        this.tournamentName = tournament.getName();
        this.eventId = event.getId();
        this.eventName = event.getName();
    }

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Long tournamentId) {
        this.tournamentId = tournamentId;
    }

    public String getTournamentName() {
        return tournamentName;
    }

    public void setTournamentName(String tournamentName) {
        this.tournamentName = tournamentName;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }
}
