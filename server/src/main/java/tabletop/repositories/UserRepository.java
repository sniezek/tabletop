package tabletop.repositories;

import org.springframework.data.repository.Repository;
import tabletop.domain.user.User;

import java.util.Optional;

public interface UserRepository extends Repository<User, Long> {
    Iterable<User> findAll();

    Optional<User> findByUsername(String username);

    User save(User user);
}
