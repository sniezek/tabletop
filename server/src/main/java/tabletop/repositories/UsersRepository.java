package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.users.User;

public interface UsersRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
