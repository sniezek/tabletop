package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.game.Game;

public interface GameRepository extends CrudRepository<Game, Long> {
}
