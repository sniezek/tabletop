package tabletop.repositories.game;

import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import tabletop.domain.ranking.GameRanking;

import java.util.List;

public interface GameRankingRepository extends CrudRepository<GameRanking, Long>, QueryDslPredicateExecutor<GameRanking>, GameRankingRepositoryCustom {
    @Override
    List<GameRanking> findAll(Predicate predicate);

    @Override
    List<GameRanking> findAll(Predicate predicate, Sort sort);

    @Override
    List<GameRanking> findAll(Predicate predicate, OrderSpecifier<?>... orders);

    @Override
    List<GameRanking> findAll(OrderSpecifier<?>... orders);
}
