package tabletop.services;

import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.domain.user.User;

import java.util.List;

/**
 * Created by Katarzyna on 22.04.2017.
 */
public interface TournamentRankingService {

    List<TournamentRanking> getRankingForGame(List<User> users, Game game);
    void updateGameRanking(Game game, List<User> usersByResult);
}
