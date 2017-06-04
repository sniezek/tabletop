package tabletop.controllers.event.dto;

import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.user.User;

import java.util.List;
import java.util.stream.Collectors;

public class EventInfoDto {
    private final String name;
    private final String description;
    private final Location location;
    private final List<EventSparringDto> sparrings;
    private final List<EventTournamentDto> tournaments;
    private final User organiser;

    public EventInfoDto(Event event) {
        this.name = event.getName();
        this.description = event.getDescription();
        this.location = event.getLocation();
        this.sparrings = event.getSparrings().stream()
                .map(sparring -> new EventSparringDto(sparring.getGameName(), sparring.getStartDate(), sparring.getEndDate(), sparring.getUsers(), sparring.getGame(), sparring.getMinPlayers(), sparring.getMaxPlayers()))
                .collect(Collectors.toList());
        this.tournaments = event.getTournaments().stream()
                .map(tournament -> new EventTournamentDto(tournament.getName(), tournament.getType(), tournament.getStartDate(), tournament.getEndDate(), tournament.getUsers(), tournament.getGame(), tournament.getMinPlayers(), tournament.getMaxPlayers()))
                .collect(Collectors.toList());
        this.organiser = event.getOrganiser();
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Location getLocation() {
        return location;
    }

    public List<EventSparringDto> getSparrings() {
        return sparrings;
    }

    public List<EventTournamentDto> getTournaments() {
        return tournaments;
    }

    public User getOrganiser() {
        return organiser;
    }
}
