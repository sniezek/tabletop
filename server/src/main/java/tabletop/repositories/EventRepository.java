package tabletop.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import tabletop.domain.events.Event;

/**
 * Created by Kuba on 2017-04-09.
 */
public interface EventRepository extends MongoRepository<Event, String> {
}
