package tabletop.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.domain.user.User;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by Katarzyna on 22.04.2017.
 */

@Repository
public class TournamentRankingRepositoryImpl implements TournamentRankingRepository{
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<TournamentRanking> getRankingForGame(List<User> users, Game game) {
        return null;
    }

    @Override
    public TournamentRanking save(TournamentRanking tournamentRanking) {
        return entityManager.merge(tournamentRanking);
    }

    @Override
    public void delete(TournamentRanking id) {
        entityManager.remove(id);
    }
}
