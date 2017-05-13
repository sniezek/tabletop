package tabletop.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import tabletop.domain.game.wininformation.SingleWinInformation;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentPlayerResult;
import tabletop.domain.match.tournament.TournamentType;
import tabletop.domain.user.User;
import tabletop.services.TournamentService;

import java.util.*;

@RestController
@RequestMapping(value = "/tournament")
public class TournamentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TournamentController.class);

    private TournamentService tournamentService;

    public TournamentController(TournamentService tournamentService) {
        this.tournamentService = tournamentService;
    }

    @RequestMapping(value = "/types", method = RequestMethod.GET)
    public List<TournamentType> getTournamentTypesList() {
        return Arrays.asList(TournamentType.values());
    }

    @RequestMapping(value = "/finished", method = RequestMethod.GET)
    public Collection<Tournament> getFinishedTournaments() {
        return tournamentService.getFinishedTournaments();
    }

    @RequestMapping(value = "/show/{tournamentid}", method = RequestMethod.GET)
    public Tournament getTournamentById(@PathVariable("tournamentid") Long tournamentid) {
        LOGGER.debug("Return tournament with id: {}", tournamentid);
        return tournamentService.getTournamentById(tournamentid);
    }

    @RequestMapping(value = "/finalresults/{tournamentid}", method = RequestMethod.GET)
    public Collection<TournamentPlayerResult> getFinalResultsForTournament(@PathVariable("tournamentid") Long tournamentid) {
        return tournamentService.getFinalResultsForTournament(tournamentid);
    }

    @RequestMapping(value = "/init/{tournamentid}", method = RequestMethod.GET)
    public Collection<Pair<User>> getInitialRound(@PathVariable("tournamentid") Long tournamentid) {
        Tournament tournament = tournamentService.getTournamentById(tournamentid);
        if (tournament == null) {
            return null;
        } else {
            List<Pair<User>> initialPairs = tournamentService.getInitialRound(tournament);
            tournamentService.addTournament(tournament);
            return initialPairs;
        }
    }

    @RequestMapping(value = "/winner", method = RequestMethod.POST, consumes = "application/json")
    public void setWinner(@RequestBody SingleWinInformation singleWinInformation) {
        Tournament tournament = tournamentService.getTournamentById(singleWinInformation.getTournamentId());
        if (tournament != null) {
            tournamentService.setWinner(tournament, singleWinInformation.getWinner());
            tournamentService.addTournament(tournament);
        }
    }

    @RequestMapping(value = "/state/{tournamentid}", method = RequestMethod.GET)
    public Map<Pair<User>, Integer> getState(@PathVariable("tournamentid") Long tournamentid) {
        Tournament tournament = tournamentService.getTournamentById(tournamentid);
        if (tournament != null) {
            return tournamentService.getCurentState(tournament);
        }
        return null;
    }

    @RequestMapping(value = "/next/{tournamentid}", method = RequestMethod.GET)
    public Collection<Pair<User>> getNextRound(@PathVariable("tournamentid") Long tournamentid) {
        Tournament tournament = tournamentService.getTournamentById(tournamentid);
        if (tournament == null) {
            return null;
        } else {
            Collection<Pair<User>> nextRound = tournamentService.getNextRound(tournament);
            tournamentService.addTournament(tournament);
            return nextRound;
        }
    }

    @RequestMapping(value = "/finish/{tournamentid}", method = RequestMethod.POST)
    public void setFinalResults(@PathVariable("tournamentid") Long tournamentid) {
        LOGGER.debug("finish tournament with: {}", tournamentid);
        Tournament tournament  = tournamentService.getTournamentById(tournamentid);
        if (tournament != null && tournament.isFinished()){
            tournamentService.setFinalResults(tournament);
        }
    }

}
