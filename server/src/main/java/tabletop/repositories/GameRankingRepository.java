package tabletop.repositories;

import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.domain.user.User;

import java.util.List;

public interface GameRankingRepository {

    List<TournamentRanking> getRankingForGame(List<User> users, Game game);

    TournamentRanking save(TournamentRanking tournamentRanking);

    void delete(TournamentRanking id);

    void updateGameRanking(Game game, List<User> usersByResult);
}
