package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.event.Event;

public interface EventRepository extends CrudRepository<Event, Long> {
}
