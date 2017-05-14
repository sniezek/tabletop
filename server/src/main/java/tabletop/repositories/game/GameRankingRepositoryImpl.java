package tabletop.repositories.game;

import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import tabletop.controllers.game.GameRankingResponse;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.ranking.QGameRanking;
import tabletop.domain.user.QUser;
import tabletop.domain.user.User;

import javax.persistence.EntityManager;
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
        List<Long> ids = users.stream().map(User::getId).collect(Collectors.toList());
        QGameRanking gameRanking = QGameRanking.gameRanking;
        Predicate predicate = gameRanking.userId.in(ids).and(gameRanking.gameName.eq(game.getName()));
        return gameRankingRepository.findAll(predicate);
    }

    @Override
    public List<GameRankingResponse> getTopUsers(Game game) {
        QGameRanking gameRanking = QGameRanking.gameRanking;
        QUser user = QUser.user;
        JPAQuery<GameRankingResponse> query = new JPAQuery(entityManager);
        query.from(gameRanking, user)
                .where(gameRanking.userId.eq(user.id), gameRanking.gameName.eq(game.getName()));
        return query.select(Projections.bean(GameRankingResponse.class, user.username, gameRanking.points)).orderBy(gameRanking.points.desc()).limit(20L).fetch();
    }
}
