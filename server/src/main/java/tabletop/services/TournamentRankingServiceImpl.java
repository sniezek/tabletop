package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.domain.user.User;
import tabletop.repositories.TournamentRankingRepository;

import java.util.List;

/**
 * Created by Katarzyna on 22.04.2017.
 */
@Service
public class TournamentRankingServiceImpl implements TournamentRankingService {
    @Autowired
    private TournamentRankingRepository tournamentRankingRepository;

    @Override
    public List<TournamentRanking> getRankingForGame(List<User> users, Game game) {
        return tournamentRankingRepository.getRankingForGame(users, game);
    }

    @Override
    public void updateGameRanking(Game game, List<User> usersByResult) {
        tournamentRankingRepository.updateGameRanking(game, usersByResult);
    }

}
