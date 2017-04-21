package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.match.tournament.Tournament;

public interface TournamentRepository extends CrudRepository<Tournament, Long> {
}
