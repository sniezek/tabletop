package tabletop.repositories;

import org.springframework.data.repository.CrudRepository;
import tabletop.domain.user.PasswordResetToken;
import tabletop.domain.user.User;

/**
 * Created by Kuba on 2017-05-28.
 */
public interface PasswordResetTokenRepository extends CrudRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
    PasswordResetToken findByUser(User user);
}
