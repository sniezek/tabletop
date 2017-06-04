package tabletop.repositories.match.tournament;

import org.springframework.data.jpa.repository.JpaRepository;
import tabletop.domain.match.tournament.Tournament;

import java.util.List;
import java.util.Optional;


public interface TournamentRepository extends JpaRepository<Tournament, Long> {
    Optional<Tournament> findOneById(Long id);

    List<Tournament> findTournamentsByFinishedIsTrue();
}
