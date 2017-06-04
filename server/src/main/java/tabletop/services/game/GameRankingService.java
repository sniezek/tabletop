package tabletop.services.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.controllers.game.GameRankingResponse;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.user.User;
import tabletop.repositories.game.GameRankingRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameRankingService {
    @Autowired
    private GameRankingRepository gameRankingRepository;

    public List<GameRanking> getUsersRankingsForGame(List<User> users, Game game) {
        return gameRankingRepository.getUsersRankingsForGame(users, game);
    }

    public void updateGameRanking(Game game, List<User> usersByResult) {
        List<GameRanking> rankings = getUsersRankingsForGame(usersByResult, game);

        for (User user : usersByResult) {
            List<GameRanking> userRankings = rankings.stream()
                    .filter(r -> r.getUserId().equals(user.getId()))
                    .collect(Collectors.toList());

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

    public List<GameRankingResponse> getTopUsers(Game game) {
        return gameRankingRepository.getTopUsers(game);
    }

}
