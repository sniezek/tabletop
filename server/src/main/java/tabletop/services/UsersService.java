package tabletop.services;

import tabletop.domain.users.User;

import java.util.Optional;

public interface UsersService {
    void createUser(User user);

    Optional<User> getUserByUsername(String username);
}
