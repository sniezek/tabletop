package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.*;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;
import tabletop.repositories.TournamentFinalResultRepository;
import tabletop.repositories.match.tournament.TournamentRepository;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class TournamentService {

    private TournamentRepository tournamentRepository;
    private TournamentFinalResultRepository tournamentFinalResultRepository;
    private SwissTournamentService swissTournamentService;

    public TournamentService(
            TournamentRepository tournamentRepository,
            TournamentFinalResultRepository tournamentFinalResultRepository,
            SwissTournamentService swissTournamentService
    ) {
        this.tournamentRepository = tournamentRepository;
        this.tournamentFinalResultRepository = tournamentFinalResultRepository;
        this.swissTournamentService = swissTournamentService;
    }

    public Optional<Tournament> getTournamentById(Long tournamentId) {
        return tournamentRepository.findOneById(tournamentId);
    }

    public void addTournament(Tournament tournament) {
        tournamentRepository.save(tournament);
    }

    public void deleteById(Long tournamentId) {
        tournamentRepository.findOneById(tournamentId).ifPresent(u -> {
            tournamentRepository.delete(u);
        });
    }

    public Collection<Tournament> getFinishedTournaments() {
        return tournamentRepository.findTournamentsByFinishedIsTrue();
    }

    public Optional<Collection<TournamentPlayerResult>> getFinalResultsForTournament(Long tournamentId) {
        Optional<Tournament> tournamentOptional = tournamentRepository.findOneById(tournamentId);

        return tournamentOptional.map(tournament -> tournamentFinalResultRepository.findByTournamentOrderByPlace(tournament));

    }

    public List<Pair<User>> getInitialRound(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            return swissTournamentService.getInitialPairs(((SwissTournamentProcess) tournament.getTournamentProcess()));
        }
        return null;
    }

    public void setWinner(Tournament tournament, User winner) {
        if (tournament.getType() == TournamentType.SWISS) {
            swissTournamentService.setWinner(((SwissTournamentProcess) tournament.getTournamentProcess()), winner);
        }
    }

    public List<Pair<User>> getCurentState(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            return swissTournamentService.getCurentState(((SwissTournamentProcess) tournament.getTournamentProcess()));
        }
        return null;
    }

    public List<Pair<User>> getNextRound(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            SwissTournamentProcess swissTournamentProcess = (SwissTournamentProcess) tournament.getTournamentProcess();

            if (swissTournamentService.canBeFinished(swissTournamentProcess)) {
                tournament.setFinished(true);
                tournamentRepository.save(tournament);
            }

            return swissTournamentService.getNextPair((swissTournamentProcess));
        }
        return null;
    }

    public void setFinalResults(Tournament tournament) {
        List<TournamentPlayerResult> results = null;
        if (tournament.getType() == TournamentType.SWISS) {
            results = swissTournamentService.getFinalResults(tournament);
        }

        if (results != null) {
            for (TournamentPlayerResult finalResult : results) {
                Optional<TournamentPlayerResult> tournamentFinalResult;
                tournamentFinalResult = tournamentFinalResultRepository
                        .findOneByUserAndTournament(finalResult.getUser(), finalResult.getTournament());

                if (!tournamentFinalResult.isPresent()) tournamentFinalResultRepository.save(finalResult);
            }
        }
    }

}
