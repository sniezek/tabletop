package tabletop.repositories.match;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import tabletop.domain.match.Sparring;

public interface SparringRepository extends CrudRepository<Sparring, Long>, QueryDslPredicateExecutor<Sparring> {
}
