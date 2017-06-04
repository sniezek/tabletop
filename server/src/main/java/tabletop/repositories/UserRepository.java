package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.user.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
