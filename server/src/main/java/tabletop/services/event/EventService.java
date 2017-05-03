package tabletop.services.event;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.event.Event;
import tabletop.repositories.event.EventRepository;
import tabletop.services.UserService;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private UserService userService;
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getEvents() {
        return Lists.newArrayList(eventRepository.findAll());
    }

    public Event addEvent(Event event) {
        event.setOrganiser(userService.getAuthenticatedUser().get());

        return eventRepository.save(event);
    }
}
