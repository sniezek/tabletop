package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tabletop.domain.user.User;
import tabletop.repositories.UserRepository;

import java.security.Principal;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<User> getUserByUsername(String username) {
        return Optional.ofNullable(usersRepository.findByUsername(username));
    }

    public Optional<User> getUserFromPrincipal(Principal principal) {
        return principal == null ? Optional.empty() : getUserByUsername(principal.getName());
    }

    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return usersRepository.save(user);
    }
}
