package tabletop.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import tabletop.domain.users.User;

/**
 * @author Olaf Sniezek
 */
public interface UsersRepository extends MongoRepository<User, String> {
}
