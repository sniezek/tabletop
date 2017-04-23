package tabletop.services;

import org.springframework.stereotype.Service;
import tabletop.domain.exceptions.BadRequestException;
import tabletop.domain.exceptions.ErrorInfo;
import tabletop.domain.match.tournament.Tournament;
import tabletop.repositories.TournamentRepository;

@Service
public class TournamentService {

    private TournamentRepository tournamentRepository;

    public TournamentService(TournamentRepository tournamentRepository){
        this.tournamentRepository = tournamentRepository;
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
}
