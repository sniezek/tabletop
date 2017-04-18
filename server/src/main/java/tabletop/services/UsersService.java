package tabletop.services;

import tabletop.domain.users.User;

public interface UsersService {
    void addUser(User user);

    User getUserByUsername(String username);
}
