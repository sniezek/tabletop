package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.exceptions.BadRequestException;
import tabletop.domain.exceptions.ErrorInfo;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentFinalResult;
import tabletop.repositories.TournamentFinalResultRepository;
import tabletop.repositories.TournamentRepository;

import java.util.Collection;

@Service
public class TournamentService {

    private TournamentRepository tournamentRepository;
    private TournamentFinalResultRepository tournamentFinalResultRepository;

    public TournamentService(
            TournamentRepository tournamentRepository,
            TournamentFinalResultRepository tournamentFinalResultRepository
    ){
        this.tournamentRepository = tournamentRepository;
        this.tournamentFinalResultRepository = tournamentFinalResultRepository;
    }

    public Tournament getTournamentById(Long tournamentId){
        return tournamentRepository
                .findOneById(tournamentId)
                .orElseThrow(() -> new BadRequestException(ErrorInfo.TOURNAMENT_NOT_FOUND));
    }

    public void addTournament(Tournament tournament) {
        tournamentRepository.save(tournament);
    }

    public void deleteById(Long tournamentId) {
        tournamentRepository.findOneById(tournamentId).ifPresent( u -> {
            tournamentRepository.delete(u);
        });
    }

    public Collection<Tournament> getFinishedTournaments() {
        return tournamentRepository.findTournamentsByFinishedIsTrue();
    }

    public Collection<TournamentFinalResult> getFinalResultsForTournament(Long tournamentId) {
        Tournament tournament = tournamentRepository
                .findOneById(tournamentId)
                .orElseThrow(() -> new BadRequestException(ErrorInfo.TOURNAMENT_NOT_FOUND));

        return tournamentFinalResultRepository.findByTournamentOrderByPlace(tournament);

    }

}
