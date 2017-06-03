package tabletop.repositories.game;

import tabletop.controllers.game.GameRankingResponse;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.user.User;

import java.util.List;

public interface GameRankingRepositoryCustom {

    void updateGameRanking(Game game, List<User> usersByResult);

    List<GameRanking> getRankingForGame(List<User> users, Game game);

    List<GameRankingResponse> getTopUsers(Game game);
}
