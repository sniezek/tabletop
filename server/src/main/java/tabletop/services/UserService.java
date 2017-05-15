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

    public User editMail(User user) {
        User edited = userRepository.findByUsername(user.getUsername());
        edited.setEmail(user.getEmail());
        //user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(edited);
    }

    public User editPassword(User user) {
        User edited = userRepository.findByUsername(user.getUsername());
        edited.setPassword(passwordEncoder.encode(user.getPassword()));
        //user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(edited);
    }
}
