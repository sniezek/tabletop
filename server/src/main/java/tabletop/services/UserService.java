package tabletop.services;

import tabletop.domain.user.User;

import java.util.Optional;

public interface UserService {
    User createUser(User user);

    Optional<User> getUserByUsername(String username);
}
