package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tabletop.domain.user.User;
import tabletop.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<User> getUserByUsername(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }

    public Optional<User> getAuthenticatedUser() {
        return getUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public User editMail(User user, String mail) {
        user.setEmail(mail);

        return userRepository.save(user);
    }

    public User editPassword(User user, String password) {
        user.setPassword(passwordEncoder.encode(password));

        return userRepository.save(user);
    }
}
