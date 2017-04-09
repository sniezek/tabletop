package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.events.Event;
import tabletop.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

/**
 * Created by Kuba on 2017-04-09.
 */
@Service
public class EventServiceImpl implements EventsService {

    private EventRepository eventRepository;

    @Autowired
    public void setEventsRepository(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public void addEvent(Event event) {
        eventRepository.save(event);
    }

    @Override
    public Event getEventByName(String name) {
        return eventRepository.findOne(name);
    }

    @Override
    public List<Event> getEvents() {
       return eventRepository.findAll();
    }
}
