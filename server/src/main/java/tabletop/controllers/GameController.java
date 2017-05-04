package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tabletop.controllers.utils.ResourceNotFoundException;
import tabletop.domain.game.Game;
import tabletop.domain.ranking.TournamentRanking;
import tabletop.services.GameRankingService;

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

    @RequestMapping(method = RequestMethod.GET, value = "/rankings/{gameName}")
    public List<TournamentRanking> getRanking(@PathVariable String gameName) {
        try {
            Game game = Game.valueOf(gameName);
            return gameRankingService.getRankingForGame(null, game);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException();
        }
    }
}
