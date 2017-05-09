package tabletop.repositories.event;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import tabletop.domain.event.Event;

public interface EventRepository extends CrudRepository<Event, Long>, QueryDslPredicateExecutor<Event> {
}
