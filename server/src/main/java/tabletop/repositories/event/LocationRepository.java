package tabletop.repositories.event;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.event.Location;

public interface LocationRepository extends CrudRepository<Location, Long> {
}
