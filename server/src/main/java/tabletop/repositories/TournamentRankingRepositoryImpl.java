package tabletop.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.domain.user.User;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Katarzyna on 22.04.2017.
 */

@Repository
public class TournamentRankingRepositoryImpl implements TournamentRankingRepository{
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<TournamentRanking> getRankingForGame(List<User> users, Game game) {
        return getRankingsForUsers(game, users);
    }

    @Override
    public TournamentRanking save(TournamentRanking tournamentRanking) {
        return entityManager.merge(tournamentRanking);
    }

    @Override
    public void delete(TournamentRanking id) {
        entityManager.remove(id);
    }

    @Override
    public void updateGameRanking(Game game, List<User> usersByResult) {

    }

    private List<TournamentRanking> getRankingsForUsers(Game game, List<User> users) {
        List<Long> ids = users.stream().map(User::getId).collect(Collectors.toList());
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<TournamentRanking> critQuery = builder.createQuery(TournamentRanking.class);
        Root<TournamentRanking> rankingRoot = critQuery.from(TournamentRanking.class);
        critQuery.select(rankingRoot);
        critQuery.where(builder.and(rankingRoot.get("userId").in(ids), rankingRoot.get("gameName").in(game.getName())));
        return entityManager.createQuery(critQuery).getResultList();
    }
}
