package tabletop.repositories.game;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import tabletop.domain.ranking.GameRanking;

public interface GameRankingRepository extends CrudRepository<GameRanking, Long>, QueryDslPredicateExecutor<GameRanking>, GameRankingRepositoryCustom {
}
