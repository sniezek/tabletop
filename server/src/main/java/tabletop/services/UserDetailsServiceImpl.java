package tabletop.services;

import com.google.common.collect.ImmutableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tabletop.domain.users.User;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    public static final String USER_ROLE = "user";

    private final UsersService usersService;

    @Autowired
    public UserDetailsServiceImpl(UsersService usersService) {
        this.usersService = usersService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = usersService.getUserByUsername(username);

        if (!user.isPresent()) {
            throw new UsernameNotFoundException("Name not found!");
        }

        return new org.springframework.security.core.userdetails.User(user.get().getUsername(), user.get().getPassword(), ImmutableList.of(new SimpleGrantedAuthority(USER_ROLE)));
    }
}
