package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.match.Sparring;

public interface SparringRepository extends CrudRepository<Sparring, Long> {
}
