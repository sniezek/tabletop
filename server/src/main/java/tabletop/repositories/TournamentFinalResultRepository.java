package tabletop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentFinalResult;

import java.util.List;

public interface TournamentFinalResultRepository extends JpaRepository<TournamentFinalResult, Long> {
    List<TournamentFinalResult> findByTournamentOrderByPlace(Tournament tournament);
}

