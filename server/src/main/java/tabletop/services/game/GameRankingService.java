package tabletop.services.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.controllers.game.GameRankingResponse;
import tabletop.controllers.game.GameStatisticsResponse;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.user.User;
import tabletop.repositories.game.GameRankingRepository;

import java.util.List;

@Service
public class GameRankingService {
    @Autowired
    private GameRankingRepository gameRankingRepository;

    public List<GameRanking> getRankingForGame(List<User> users, Game game) {
        return gameRankingRepository.getRankingForGame(users, game);
    }

    public void updateGameRanking(Game game, List<User> usersByResult) {
        gameRankingRepository.updateGameRanking(game, usersByResult);
    }

    public List<GameRankingResponse> getTopUsers(Game game, int pageNum) {
        return gameRankingRepository.getTopUsers(game, pageNum);
    }

    public GameStatisticsResponse getGameStatistics(Game game) {
        return gameRankingRepository.getGameStatistics(game);
    }

    public Long getRankingSize(Game game) {
        return gameRankingRepository.getRankingSize(game);
    }
}
