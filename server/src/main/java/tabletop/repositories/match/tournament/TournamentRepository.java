package tabletop.repositories.match.tournament;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.match.tournament.Tournament;

public interface TournamentRepository extends CrudRepository<Tournament, Long> {
}
