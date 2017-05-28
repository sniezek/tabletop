package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentPlayerResult;
import tabletop.domain.match.tournament.TournamentType;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;
import tabletop.repositories.TournamentPlayerResultRepository;
import tabletop.repositories.match.tournament.TournamentRepository;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static java.util.Objects.nonNull;

@Service
public class TournamentService {
    private TournamentRepository tournamentRepository;
    private TournamentPlayerResultRepository tournamentPlayerResultRepository;
    private SwissTournamentService swissTournamentService;

    public TournamentService(
            TournamentRepository tournamentRepository,
            TournamentPlayerResultRepository tournamentPlayerResultRepository,
            SwissTournamentService swissTournamentService
    ) {
        this.tournamentRepository = tournamentRepository;
        this.tournamentPlayerResultRepository = tournamentPlayerResultRepository;
        this.swissTournamentService = swissTournamentService;
    }

    public Optional<Tournament> getTournamentById(Long tournamentId) {
        return tournamentRepository.findOneById(tournamentId);
    }

    public void saveTournament(Tournament tournament) {
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

    public Optional<Collection<TournamentPlayerResult>> getTournamentPlayerResults(Long tournamentId) {
        return tournamentRepository.findOneById(tournamentId)
                .map(tournament -> tournamentPlayerResultRepository.findByTournamentOrderByPlace(tournament));

    }

    public List<Pair<User>> getInitialRound(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            return swissTournamentService.getInitialPairs(((SwissTournamentProcess) tournament.getTournamentProcess()));
        }

        return Collections.emptyList();
    }

    public void setWinner(Tournament tournament, User winner) {
        if (tournament.getType() == TournamentType.SWISS) {
            swissTournamentService.setWinner(((SwissTournamentProcess) tournament.getTournamentProcess()), winner);
        }
    }

    public List<Pair<User>> getCurrentState(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            SwissTournamentProcess process = (SwissTournamentProcess) tournament.getTournamentProcess();

            return nonNull(process) ? swissTournamentService.getCurentState(process) : Collections.emptyList();
        }

        return Collections.emptyList();
    }

    public List<Pair<User>> getNextRound(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            SwissTournamentProcess process = (SwissTournamentProcess) tournament.getTournamentProcess();

            if (swissTournamentService.canBeFinished(process)) {
                tournament.setFinished(true);
                tournamentRepository.save(tournament);
            }

            return swissTournamentService.getNextPair((process));
        }
        return Collections.emptyList();
    }

    public void saveResults(Tournament tournament) {
        List<TournamentPlayerResult> results = null;

        if (tournament.getType() == TournamentType.SWISS) {
            results = swissTournamentService.getFinalResults(tournament);
        }

        if (results != null) {
            for (TournamentPlayerResult result : results) {
                Optional<TournamentPlayerResult> tournamentFinalResult = tournamentPlayerResultRepository
                        .findOneByUserAndTournament(result.getUser(), result.getTournament());

                if (!tournamentFinalResult.isPresent()) {
                    tournamentPlayerResultRepository.save(result);
                }
            }
        }
    }

    public void giveUp(Tournament tournament, User user) {
        if (tournament.getType() == TournamentType.SWISS) {
            swissTournamentService.giveUp(tournament, user);
        }
    }

    public boolean isUserAvailable(Tournament tournament, User user) {
        if (tournament.getType() == TournamentType.SWISS) {
            return swissTournamentService.isUserAvailable(tournament, user);
        }

        return false;
    }
}
