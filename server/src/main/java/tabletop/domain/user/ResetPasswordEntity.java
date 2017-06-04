package tabletop.domain.user;

import tabletop.domain.IdComparableEntity;

import javax.persistence.Entity;

/**
 * Created by Kuba on 2017-06-04.
 */
@Entity
public class ResetPasswordEntity extends IdComparableEntity {

    private String token;
    private String password;
    private Long id;

    ResetPasswordEntity() {

    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
