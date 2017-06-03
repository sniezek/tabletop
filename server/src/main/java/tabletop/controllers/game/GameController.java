package tabletop.controllers.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tabletop.controllers.utils.ResourceNotFoundException;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.GameRanking;
import tabletop.domain.user.User;
import tabletop.services.game.GameRankingService;

import java.util.Arrays;
import java.util.List;

@RestController
public class GameController {
    @Autowired
    private GameRankingService gameRankingService;

    @RequestMapping(method = RequestMethod.GET, value = "/games")
    public List<Game> getGamesList() {
        return Arrays.asList(Game.values());
    }

    @RequestMapping(method = RequestMethod.GET, value = "/games/{gameName}")
    public Game getGame(@PathVariable String gameName) {
        try {
            return Game.valueOf(gameName.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/rankings/{gameName}/{pageNum}")
    public List<GameRankingResponse> getRanking(@PathVariable String gameName, @PathVariable Integer pageNum) {
        try {
            Game game = Game.valueOf(gameName.toUpperCase());
            return gameRankingService.getTopUsers(game, pageNum);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException();
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/rankings/{gameName}")
    public List<GameRanking> getRanking(@PathVariable String gameName, @RequestBody List<User> users) {
        try {
            Game game = Game.valueOf(gameName.toUpperCase());
            return gameRankingService.getRankingForGame(users, game);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/rankings/size/{gameName}")
    public Long getRankingSize(@PathVariable String gameName) {
        try {
            Game game = Game.valueOf(gameName.toUpperCase());
            return gameRankingService.getRankingSize(game);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/gameStats/{gameName}")
    public GameStatisticsResponse getGameStatistics(@PathVariable String gameName) {
        try {
            Game game = Game.valueOf(gameName.toUpperCase());
            return gameRankingService.getGameStatistics(game);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException();
        }
    }
}
