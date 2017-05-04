package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.domain.user.User;
import tabletop.repositories.GameRankingRepository;

import java.util.List;

@Service
public class GameRankingService {
    @Autowired
    private GameRankingRepository gameRankingRepository;

    public List<TournamentRanking> getRankingForGame(List<User> users, Game game) {
        return gameRankingRepository.getRankingForGame(users, game);
    }

    public void updateGameRanking(Game game, List<User> usersByResult) {
        gameRankingRepository.updateGameRanking(game, usersByResult);
    }

}
