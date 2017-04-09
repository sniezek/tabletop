package tabletop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tabletop.domain.users.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MongoUserDetailsService implements UserDetailsService {
    public static final String USER_ROLE = "user";
    public static final String ADMIN_ROLE = "admin";

    private UsersServiceImpl usersServiceImpl;

    @Autowired
    public void setUsersServiceImpl(UsersServiceImpl usersServiceImpl) {
        this.usersServiceImpl = usersServiceImpl;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersServiceImpl.getUserByUsername(username);

        if (user == null)
            throw new UsernameNotFoundException("Name not found!");

        List<SimpleGrantedAuthority> auths = new ArrayList<>();

        auths.add(new SimpleGrantedAuthority(USER_ROLE));
        auths.addAll(user.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), auths);

    }
}
