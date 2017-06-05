package tabletop.controllers.event.dto;

import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.user.User;

import java.util.List;
import java.util.stream.Collectors;

public class EventInfoDto {
    private final Long id;
    private final String name;
    private final String description;
    private final Location location;
    private final List<EventSparringDto> sparrings;
    private final List<EventTournamentDto> tournaments;
    private final User organiser;

    public EventInfoDto(Event event) {
        this.id = event.getId();
        this.name = event.getName();
        this.description = event.getDescription();
        this.location = event.getLocation();
        this.sparrings = event.getSparrings().stream().map(EventSparringDto::new).collect(Collectors.toList());
        this.tournaments = event.getTournaments().stream().map(EventTournamentDto::new).collect(Collectors.toList());
        this.organiser = event.getOrganiser();
    }

    public Long getId() {
        return id;
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
