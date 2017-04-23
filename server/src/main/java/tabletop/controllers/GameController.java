package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tabletop.domain.game.Game;
import tabletop.services.TournamentRankingService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Katarzyna on 22.04.2017.
 */

@RestController
public class GameController {
    @Autowired
    private TournamentRankingService tournamentRankingService;

    @RequestMapping(method = RequestMethod.GET, value = "/games")
    public List<Game> getGamesList() {
        List<Game> games = new ArrayList<>();
        games.addAll(Arrays.asList(Game.values()));
        return games;
    }
}
