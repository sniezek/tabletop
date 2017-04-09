package tabletop.domain.users;

import org.springframework.data.annotation.Id;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Olaf Sniezek
 */
public class User {
    @Id
    private String username;

    private String password;
    private Set<String> roles;

    public User() {
        this.roles = new HashSet<>();
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
