package tabletop.services.event;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.event.Event;
import tabletop.repositories.event.EventRepository;
import tabletop.services.UserService;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private UserService userService;
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getEvents() {
        return Lists.newArrayList(eventRepository.findAll());
    }

    public Event createEvent(Event event) {
        event.setOrganiser(userService.getAuthenticatedUser().get());

        return saveEvent(event);
    }

    public Event updateEvent(Long id, Event newEvent) {
        Event oldEvent = getEventById(id).get();

        newEvent.setId(id);
        newEvent.setOrganiser(oldEvent.getOrganiser());

        return saveEvent(newEvent);
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public Optional<Event> getEventById(Long id) {
        return Optional.ofNullable(eventRepository.findOne(id));
    }
}
