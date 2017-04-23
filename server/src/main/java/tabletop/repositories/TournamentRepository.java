package tabletop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import tabletop.domain.match.tournament.Tournament;

import java.util.Optional;


public interface TournamentRepository extends JpaRepository<Tournament, Long> {

    Optional<Tournament> findOneById(Long id);
}
