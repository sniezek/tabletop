package tabletop.services;

import tabletop.domain.users.User;

/**
 * @author Olaf Sniezek
 */
public interface UsersService {
    void addUser(User user);

    User getUserByUsername(String username);
}
