package tabletop.services;

import tabletop.domain.events.Event;

import java.util.List;

/**
 * Created by Kuba on 2017-04-09.
 */
public interface EventsService {

    void addEvent(Event event);

    Event getEventByName(String name);

    List<Event> getEvents();

}
