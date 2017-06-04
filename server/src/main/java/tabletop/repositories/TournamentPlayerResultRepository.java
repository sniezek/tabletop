package tabletop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentPlayerResult;
import tabletop.domain.user.User;

import java.util.List;
import java.util.Optional;

public interface TournamentPlayerResultRepository extends JpaRepository<TournamentPlayerResult, Long> {
    List<TournamentPlayerResult> findByTournamentOrderByPlace(Tournament tournament);

    Optional<TournamentPlayerResult> findOneByUserAndTournament(User user, Tournament tournament);
}
