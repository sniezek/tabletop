package tabletop.repositories.game;

import tabletop.controllers.game.GameRankingResponse;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.user.User;

import java.util.List;

public interface GameRankingRepositoryCustom {
    List<GameRanking> getUsersRankingsForGame(List<User> users, Game game);

    List<GameRankingResponse> getTopUsers(Game game);
}
