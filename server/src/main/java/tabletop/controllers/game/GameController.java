package tabletop.controllers.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.game.Game;
import tabletop.domain.user.User;
import tabletop.services.game.GameRankingService;

import java.util.Arrays;
import java.util.List;

@RestController
public class GameController {
    @Autowired
    private GameValidator validator;
    @Autowired
    private GameRankingService gameRankingService;

    @RequestMapping(method = RequestMethod.GET, value = "/games")
    public List<Game> getGamesList() {
        return Arrays.asList(Game.values());
    }

    @RequestMapping(method = RequestMethod.GET, value = "/games/{gameName}")
    public ResponseEntity<Game> getGame(@PathVariable String gameName) {
        try {
            return ResponseEntity.ok(Game.valueOf(gameName.toUpperCase()));
        } catch (IllegalArgumentException e) {
            return ResponseUtils.notFound();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/rankings/{gameName}")
    public ResponseEntity<List<GameRankingResponse>> getGameRanking(@PathVariable String gameName) {
        try {
            return ResponseEntity.ok(gameRankingService.getTopUsers(Game.valueOf(gameName.toUpperCase())));
        } catch (IllegalArgumentException e) {
            return ResponseUtils.notFound();
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/rankings/{gameName}")
    public ResponseEntity<?> getUsersRankingsForGame(@PathVariable String gameName, @RequestBody List<User> users) {
        ControllerErrors errors = new ControllerErrors();

        validator.validateUsers(users, errors);
        if (errors.areErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        try {
            return ResponseEntity.ok(gameRankingService.getUsersRankingsForGame(users, Game.valueOf(gameName.toUpperCase())));
        } catch (IllegalArgumentException e) {
            return ResponseUtils.notFound();
        }
    }
}
