package tabletop.repositories.game;

import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.ranking.QGameRanking;
import tabletop.domain.user.User;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
public class GameRankingRepositoryImpl implements GameRankingRepositoryCustom {
    @Autowired
    private EntityManager entityManager;

    @Autowired
    private GameRankingRepository gameRankingRepository;

    @Override
    public void updateGameRanking(Game game, List<User> usersByResult) {
        List<GameRanking> rankings = getRankingsForUsers(game, usersByResult);

        for (User user: usersByResult) {
            List<GameRanking> userRankings = rankings.stream().filter(r -> r.getUserId().equals(user.getId())).collect(Collectors.toList());
            GameRanking userRanking;
            if (userRankings.size() == 0) {
                userRanking = new GameRanking();
                userRanking.setUserId(user.getId());
                userRanking.setGameName(game.getName());
                userRanking.setPoints(0L);

            } else {
                userRanking = userRankings.get(0);
            }

            int place = usersByResult.indexOf(user) + 1;
            int allUsersCount = usersByResult.size();
            userRanking.setPoints(userRanking.getPoints() + (allUsersCount - place));
            gameRankingRepository.save(userRanking);
        }
    }

    @Override
    public List<GameRanking> getRankingForGame(List<User> users, Game game) {
        return getRankingsForUsers(game, users);
    }

    private List<GameRanking> getRankingsForUsers(Game game, List<User> users) {
        if (users != null) {
            List<Long> ids = users.stream().map(User::getId).collect(Collectors.toList());
            CriteriaBuilder builder = entityManager.getCriteriaBuilder();
            CriteriaQuery<GameRanking> critQuery = builder.createQuery(GameRanking.class);
            Root<GameRanking> rankingRoot = critQuery.from(GameRanking.class);
            critQuery.select(rankingRoot);
            critQuery.where(builder.and(rankingRoot.get("userId").in(ids), rankingRoot.get("gameName").in(game.getName())));
            return entityManager.createQuery(critQuery).getResultList();
        } else {
            CriteriaBuilder builder = entityManager.getCriteriaBuilder();
            CriteriaQuery<GameRanking> critQuery = builder.createQuery(GameRanking.class);
            Root<GameRanking> rankingRoot = critQuery.from(GameRanking.class);
            critQuery.select(rankingRoot);
            critQuery.where(rankingRoot.get("gameName").in(game.getName()));
            critQuery.orderBy(builder.desc(rankingRoot.get("points")));
            return entityManager.createQuery(critQuery).setMaxResults(20).getResultList();
        }

    }

    private List<GameRanking> getRankingsForUsers2(Game game, List<User> users) {
        if (users != null) {
            List<Long> ids = users.stream().map(User::getId).collect(Collectors.toList());
            QGameRanking gameRanking = QGameRanking.gameRanking;
            Predicate predicate = gameRanking.userId.in(ids).and(gameRanking.gameName.eq(game.getName()));
            return gameRankingRepository.findAll(predicate);
        }
        else {
            QGameRanking gameRanking = QGameRanking.gameRanking;
            Predicate predicate = gameRanking.gameName.eq(game.getName());
            Pageable pageable = new PageRequest(0, 20, Sort.Direction.DESC, "points");
            return gameRankingRepository.findAll(predicate, pageable).getContent();
        }

    }
}
