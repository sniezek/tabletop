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
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

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
    public ResponseEntity<TournamentDTO> getInitialRound(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        List<Pair<User>> initialPairs = tournamentService.getInitialRound(tournamentOptional.get());
        tournamentService.addTournament(tournamentOptional.get());
        return getOkResponseWithTournamentDetails(tournamentOptional.get(), initialPairs);
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

        if (!isCurrentUserCreator(tournamentOptional.get())) {
            return ResponseUtils.forbidden();
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
    public ResponseEntity<TournamentDTO> getState(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Tournament tournament = tournamentOptional.get();
        boolean isCurrentUserEnrolled = isCurrentUserEnrolled(tournament);
        if (!isCurrentUserEnrolled && !isCurrentUserCreator(tournament)) {
            return ResponseUtils.forbidden();
        }

        return getOkResponseWithTournamentDetails(
                tournament,
                tournamentService.getCurentState(tournament),
                isCurrentUserEnrolled,
                tournamentService.isUserAvailable(tournament, userService.getAuthenticatedUser().get()));
    }

    @RequestMapping(value = "/next/{tournamentid}", method = RequestMethod.GET)
    public ResponseEntity<TournamentDTO> getNextRound(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Tournament tournament = tournamentOptional.get();
        Optional<User> authenticatedUser = userService.getAuthenticatedUser();
        if (!isCurrentUserCreator(tournamentOptional.get())) {
            return ResponseUtils.forbidden();
        }

        List<Pair<User>> nextRound = tournamentService.getNextRound(tournament);
        tournamentService.addTournament(tournament);
        return getOkResponseWithTournamentDetails(tournament, nextRound, tournamentService.isUserAvailable(tournament, authenticatedUser.get()));
    }

    @RequestMapping(value = "/finish/{tournamentid}", method = RequestMethod.POST)
    public ResponseEntity setFinalResults(@PathVariable("tournamentid") Long tournamentid) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentid);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        if (!isCurrentUserCreator(tournamentOptional.get())) {
            return ResponseUtils.forbidden();
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

        if (!isCurrentUserEnrolled(tournamentOptional.get())) {
            return ResponseUtils.forbidden();
        }

        tournamentService.giveUp(tournamentOptional.get(), userService.getAuthenticatedUser().get());
        tournamentService.addTournament(tournamentOptional.get());
        return ResponseEntity.ok().build();
    }

    private ResponseEntity<TournamentDTO> getOkResponseWithTournamentDetails(Tournament tournament, List<Pair<User>> nextRound) {
        boolean isEnrolled = isCurrentUserEnrolled(tournament);
        return getOkResponseWithTournamentDetails(tournament, nextRound, isEnrolled, isEnrolled);
    }

    private ResponseEntity<TournamentDTO> getOkResponseWithTournamentDetails(Tournament tournament, List<Pair<User>> nextRound, boolean isAvailable) {
        boolean isEnrolled = isCurrentUserEnrolled(tournament);
        return getOkResponseWithTournamentDetails(tournament, nextRound, isEnrolled, isAvailable);
    }

    private ResponseEntity<TournamentDTO> getOkResponseWithTournamentDetails(Tournament tournament, List<Pair<User>> nextRound, boolean isEnrolled, boolean isAvailable) {
        return ResponseEntity.ok(
                new TournamentDTO(
                        tournament.getCreator(),
                        nextRound,
                        isEnrolled && isAvailable
                ));
    }

    private boolean isCurrentUserCreator(Tournament tournamentOptional) {
        return userService.getAuthenticatedUser()
                .map(user -> user.equals(tournamentOptional.getCreator()))
                .orElse(false);
    }

    private Boolean isCurrentUserEnrolled(Tournament tournament) {
        return userService.getAuthenticatedUser()
                .map(tournament.getUsers()::contains)
                .orElse(false);
    }
}
