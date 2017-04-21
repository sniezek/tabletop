package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tabletop.domain.user.User;
import tabletop.repositories.UserRepository;

import java.security.Principal;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Optional<User> getUserByUsername(String username) {
        return Optional.ofNullable(usersRepository.findByUsername(username));
    }

    @Override
    public Optional<User> getUserFromPrincipal(Principal principal) {
        return principal == null ? Optional.empty() : Optional.ofNullable(usersRepository.findByUsername(principal.getName()));
    }

    @Override
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return usersRepository.save(user);
    }
}
