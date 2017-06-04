package tabletop.controllers;

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

    @RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
    public ResponseEntity<Tournament> getTournamentById(@PathVariable Long id) {
        return tournamentService.getTournamentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseUtils.notFound());
    }

    @RequestMapping(value = "/results/{tournamentId}", method = RequestMethod.GET)
    public ResponseEntity<Collection<TournamentPlayerResult>> getTournamentPlayerResults(@PathVariable Long tournamentId) {
        return tournamentService.getTournamentPlayerResults(tournamentId)
                .map(ResponseEntity::ok)
                .orElse(ResponseUtils.notFound());
    }

    @RequestMapping(value = "/init/{tournamentId}", method = RequestMethod.GET)
    public ResponseEntity<TournamentDTO> getInitialRound(@PathVariable Long tournamentId) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentId);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Tournament tournament = tournamentOptional.get();

        if (!isCurrentUserCreator(tournament)) {
            return ResponseUtils.forbidden();
        }

        List<Pair<User>> initialPairs = tournamentService.getInitialRound(tournament);
        tournamentService.saveTournament(tournament);

        return getOkResponseWithTournamentDetails(tournament, initialPairs);
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

        Tournament tournament = tournamentOptional.get();

        if (!isCurrentUserCreator(tournament)) {
            return ResponseUtils.forbidden();
        }

        Optional<User> userOptional = userService.getUserByUsername(singleWinInformation.getWinnerUsername());
        if (!userOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        tournamentService.setWinner(tournament, userOptional.get());
        tournamentService.saveTournament(tournament);

        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/state/{tournamentId}", method = RequestMethod.GET)
    public ResponseEntity<TournamentDTO> getState(@PathVariable Long tournamentId) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentId);
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
                tournamentService.getCurrentState(tournament),
                isCurrentUserEnrolled,
                tournamentService.isUserAvailable(tournament, userService.getAuthenticatedUser().get()));
    }

    @RequestMapping(value = "/next/{tournamentId}", method = RequestMethod.GET)
    public ResponseEntity<TournamentDTO> getNextRound(@PathVariable Long tournamentId) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentId);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Tournament tournament = tournamentOptional.get();

        if (!isCurrentUserCreator(tournament)) {
            return ResponseUtils.forbidden();
        }

        List<Pair<User>> nextRound = tournamentService.getNextRound(tournament);

//        tournamentService.saveTournament(tournament);
//        saveResults(tournamentId);

        return getOkResponseWithTournamentDetails(tournament, nextRound, tournamentService.isUserAvailable(tournament, userService.getAuthenticatedUser().get()));
    }

    @RequestMapping(value = "/finish/{tournamentId}", method = RequestMethod.POST)
    public ResponseEntity saveResults(@PathVariable Long tournamentId) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentId);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Tournament tournament = tournamentOptional.get();

        if (!isCurrentUserCreator(tournament)) {
            return ResponseUtils.forbidden();
        }

        if (tournament.isFinished()) {
            tournamentService.saveResults(tournament);
        }

        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/giveup/{tournamentId}", method = RequestMethod.POST)
    public ResponseEntity giveUp(@PathVariable Long tournamentId) {
        Optional<Tournament> tournamentOptional = tournamentService.getTournamentById(tournamentId);
        if (!tournamentOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Tournament tournament = tournamentOptional.get();

        if (!isCurrentUserEnrolled(tournament)) {
            return ResponseUtils.forbidden();
        }

        tournamentService.giveUp(tournament, userService.getAuthenticatedUser().get());
        tournamentService.saveTournament(tournament);

        return ResponseEntity.ok().build();
    }

    private ResponseEntity<TournamentDTO> getOkResponseWithTournamentDetails(Tournament tournament, List<Pair<User>> nextRound) {
        return getOkResponseWithTournamentDetails(tournament, nextRound, isCurrentUserEnrolled(tournament), true);
    }

    private ResponseEntity<TournamentDTO> getOkResponseWithTournamentDetails(Tournament tournament, List<Pair<User>> nextRound, boolean isAvailable) {
        return getOkResponseWithTournamentDetails(tournament, nextRound, isCurrentUserEnrolled(tournament), isAvailable);
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

    private boolean isCurrentUserEnrolled(Tournament tournament) {
        return userService.getAuthenticatedUser()
                .map(tournament.getUsers()::contains)
                .orElse(false);
    }
}
