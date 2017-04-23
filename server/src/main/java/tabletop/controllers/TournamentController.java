package tabletop.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import tabletop.domain.match.tournament.Tournament;
import tabletop.services.TournamentService;

@RestController
@RequestMapping(value="/tournament")
public class TournamentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TournamentController.class);

    private TournamentService tournamentService;

    public TournamentController(TournamentService tournamentService){
        this.tournamentService = tournamentService;
    }

    @GetMapping(value = "/show/{tournamentid}")
    public Tournament getTournamentById(@PathVariable("tournamentid") Long tournamentid){
        LOGGER.debug("Return tournament with id: {}", tournamentid);
        return tournamentService.getTournamentById(tournamentid);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = "application/json")
    public void createTournament(@RequestBody Tournament tournament){
        LOGGER.debug("Request to create tournament for game: {}", tournament.getGameName());
        tournamentService.addTournament(tournament);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = "application/json")
    public void updateTournament(@RequestBody Tournament tournament){
        if (tournament.getId() == null) {
            createTournament(tournament);
        } else {
            LOGGER.debug("Request to update tournament with id: {}", tournament.getId());
            tournamentService.addTournament(tournament);
        }
    }

    @RequestMapping(value = "/delete/{tournamentid}", method = RequestMethod.DELETE)
    public void deleteTournament(@PathVariable("tournamentid") Long tournamentid){
        LOGGER.debug("Request to delete tournament: {}", tournamentid);
        tournamentService.deleteById(tournamentid);
    }
}
