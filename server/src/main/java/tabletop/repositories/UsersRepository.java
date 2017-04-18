package tabletop.repositories;

import org.springframework.data.repository.Repository;
import tabletop.domain.users.User;

import java.util.Optional;

public interface UsersRepository extends Repository<User, Long> {
    Optional<User> findByUsername(String username);

    User save(User user);
}
