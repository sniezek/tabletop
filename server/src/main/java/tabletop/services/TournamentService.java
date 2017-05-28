package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentPlayerResult;
import tabletop.domain.match.tournament.TournamentType;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;
import tabletop.repositories.TournamentFinalResultRepository;
import tabletop.repositories.match.tournament.TournamentRepository;

import java.util.*;

@Service
public class TournamentService {

    private TournamentRepository tournamentRepository;
    private TournamentFinalResultRepository tournamentFinalResultRepository;
    private LadderTournamentService ladderTournamentService;
    private SwissTournamentService swissTournamentService;

    public TournamentService(
            TournamentRepository tournamentRepository,
            TournamentFinalResultRepository tournamentFinalResultRepository,
            LadderTournamentService ladderTournamentService,
            SwissTournamentService swissTournamentService
    ) {
        this.tournamentRepository = tournamentRepository;
        this.tournamentFinalResultRepository = tournamentFinalResultRepository;
        this.swissTournamentService = swissTournamentService;
        this.ladderTournamentService = ladderTournamentService;
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
        } else if (tournament.getType() == TournamentType.LADDER) {
            return ladderTournamentService.getInitialPairs((SwissTournamentProcess) tournament.getTournamentProcess());
        }
        return Collections.emptyList();
    }

    public void setWinner(Tournament tournament, User winner) {
        if (tournament.getType() == TournamentType.SWISS) {
            swissTournamentService.setWinner(((SwissTournamentProcess) tournament.getTournamentProcess()), winner);
        } else if (tournament.getType() == TournamentType.LADDER) {
            ladderTournamentService.setWinner(((SwissTournamentProcess) tournament.getTournamentProcess()), winner);
        }
    }

    public List<Pair<User>> getCurentState(Tournament tournament) {
        if (tournament.getType() == TournamentType.SWISS) {
            SwissTournamentProcess process = (SwissTournamentProcess) tournament.getTournamentProcess();
            return Objects.nonNull(process) ? swissTournamentService.getCurentState(process) : Collections.emptyList();
        } else if (tournament.getType() == TournamentType.LADDER) {
            SwissTournamentProcess process = (SwissTournamentProcess) tournament.getTournamentProcess();
            return Objects.nonNull(process) ? ladderTournamentService.getCurentState(process) : Collections.emptyList();
        }
        return Collections.emptyList();
    }

    public List<Pair<User>> getNextRound(Tournament tournament) {
        SwissTournamentProcess swissTournamentProcess = (SwissTournamentProcess) tournament.getTournamentProcess();

        if (tournament.getType() == TournamentType.SWISS) {

            if (swissTournamentService.canBeFinished(swissTournamentProcess)) {
                tournament.setFinished(true);
                tournamentRepository.save(tournament);
            }

            return swissTournamentService.getNextPair((swissTournamentProcess));
        } else if (tournament.getType() == TournamentType.LADDER) {

            if (ladderTournamentService.canBeFinished(swissTournamentProcess)) {
                tournament.setFinished(true);
                tournamentRepository.save(tournament);
            }

            return ladderTournamentService.getNextPair(swissTournamentProcess);
        }
        return Collections.emptyList();
    }

    public void setFinalResults(Tournament tournament) {
        List<TournamentPlayerResult> results = null;
        if (tournament.getType() == TournamentType.SWISS) {
            results = swissTournamentService.getFinalResults(tournament);
        } else if (tournament.getType() == TournamentType.LADDER) {
            results = ladderTournamentService.getFinalResults(tournament);
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

    public void giveUp(Tournament tournament, User user) {
        if (tournament.getType() == TournamentType.SWISS) {
            swissTournamentService.giveUp(tournament, user);
        } else if (tournament.getType() == TournamentType.LADDER) {
            ladderTournamentService.giveUp(tournament, user);
        }
    }

    public boolean isUserAvailable(Tournament tournament, User user) {
        if (tournament.getType() == TournamentType.SWISS) {
            return swissTournamentService.isUserAvailable(tournament, user);
        } else if (tournament.getType() == TournamentType.LADDER) {
            return ladderTournamentService.isUserAvailable(tournament, user);
        }
        return false;
    }
}
