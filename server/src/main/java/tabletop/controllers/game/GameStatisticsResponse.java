package tabletop.controllers.game;

import tabletop.domain.event.Location;

import java.util.List;

public class GameStatisticsResponse {

    private long sparringsCount;
    private long tournamentsCount;
    private long eventsCount;
    private List<Location> topLocations;

    public GameStatisticsResponse(long sparringsCount, long tournamentsCount, long eventsCount, List<Location> topLocations) {
        this.sparringsCount = sparringsCount;
        this.tournamentsCount = tournamentsCount;
        this.eventsCount = eventsCount;
        this.topLocations = topLocations;
    }

    public List<Location> getTopLocations() {
        return topLocations;
    }

    public void setTopLocations(List<Location> topLocations) {
        this.topLocations = topLocations;
    }

    public long getSparringsCount() {
        return sparringsCount;
    }

    public void setSparringsCount(long sparringsCount) {
        this.sparringsCount = sparringsCount;
    }

    public long getTournamentsCount() {
        return tournamentsCount;
    }

    public void setTournamentsCount(long tournamentsCount) {
        this.tournamentsCount = tournamentsCount;
    }

    public long getEventsCount() {
        return eventsCount;
    }

    public void setEventsCount(long eventsCount) {
        this.eventsCount = eventsCount;
    }
}
