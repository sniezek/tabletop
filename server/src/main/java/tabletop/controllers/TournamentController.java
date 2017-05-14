package tabletop.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.game.wininformation.SingleWinInformation;
import tabletop.domain.match.tournament.*;
import tabletop.domain.user.User;
import tabletop.services.TournamentService;
import tabletop.services.UserService;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping(value = "/tournament")
public class TournamentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TournamentController.class);

    private final TournamentService tournamentService;
    private final UserService userService;

    public TournamentController(TournamentService tournamentService, UserService userService) {
        this.tournamentService = tournamentService;
        this.userService = userService;
    }

    @RequestMapping(value = "/types", method = RequestMethod.GET)
    public ResponseEntity<List<TournamentType>> getTournamentTypesList() {
        return ResponseEntity.ok(Arrays.asList(TournamentType.values()));
    }

    @RequestMapping(value = "/finished", method = RequestMethod.GET)
    public ResponseEntity<Collection<Tournament>> getFinishedTournaments() {
        return ResponseEntity.ok(tournamentService.getFinishedTournaments());
    }

    @RequestMapping(value = "/show/{tournamentid}", method = RequestMethod.GET)
    public ResponseEntity<Tournament> getTournamentById(@PathVariable("tournamentid") Long tournamentid) {
        LOGGER.debug("Return tournament with id: {}", tournamentid);
        return tournamentService.getTournamentById(tournamentid)
                .map(ResponseEntity::ok)
                .orElse(ResponseUtils.notFound());
    }

    @RequestMapping(value = "/finalresults/{tournamentid}", method = RequestMethod.GET)
    public ResponseEntity<Collection<TournamentPlayerResult>> getFinalResultsForTournament(@PathVariable("tournamentid") Long tournamentid) {
        return tournamentService.getFinalResultsForTournament(tournamentid)
                .map(ResponseEntity::ok)
                .orElse(ResponseUtils.notFound());
    }

    @RequestMapping(value = "/init/{tournamentid}", method = RequestMethod.GET)
    public ResponseEntity<Collection<Pair<User>>> getInitialRound(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }
        List<Pair<User>> initialPairs = tournamentService.getInitialRound(tournamentOptional.get());
        tournamentService.addTournament(tournamentOptional.get());
        return ResponseEntity.ok(initialPairs);
    }

    @RequestMapping(value = "/winner", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity setWinner(@Valid @RequestBody SingleWinInformation singleWinInformation, BindingResult bindingResult) {
        ControllerErrors errors = new ControllerErrors(bindingResult);
        if (errors.areErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(singleWinInformation.getTournamentId());
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Optional<User> userOptional = userService.getUserByUsername(singleWinInformation.getWinnerUsername());
        if (!userOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        tournamentService.setWinner(tournamentOptional.get(), userOptional.get());
        tournamentService.addTournament(tournamentOptional.get());
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/state/{tournamentid}", method = RequestMethod.GET)
    public ResponseEntity<List<Pair<User>>> getState(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }
        return ResponseEntity.ok(tournamentService.getCurentState(tournamentOptional.get()));
    }

    @RequestMapping(value = "/next/{tournamentid}", method = RequestMethod.GET)
    public ResponseEntity<List<Pair<User>>> getNextRound(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }
        List<Pair<User>> nextRound = tournamentService.getNextRound(tournamentOptional.get());
        tournamentService.addTournament(tournamentOptional.get());
        return ResponseEntity.ok(nextRound);
    }

    @RequestMapping(value = "/finish/{tournamentid}", method = RequestMethod.POST)
    public ResponseEntity setFinalResults(@PathVariable("tournamentid") Long tournamentid) {

        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        if (tournamentOptional.get().isFinished()) {
            tournamentService.setFinalResults(tournamentOptional.get());
        }

        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/giveup/{tournamentid}", method = RequestMethod.POST)
    public ResponseEntity giveUp(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }
        tournamentService.giveUp(tournamentOptional.get(), userService.getAuthenticatedUser().get());
        tournamentService.addTournament(tournamentOptional.get());
        return ResponseEntity.ok().build();
    }

}
