package tabletop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentFinalResult;
import tabletop.domain.user.User;

import java.util.List;
import java.util.Optional;

public interface TournamentFinalResultRepository extends JpaRepository<TournamentFinalResult, Long> {
    List<TournamentFinalResult> findByTournamentOrderByPlace(Tournament tournament);
    Optional<TournamentFinalResult> findOneByUserAndTournament(User user, Tournament tournament);
}

