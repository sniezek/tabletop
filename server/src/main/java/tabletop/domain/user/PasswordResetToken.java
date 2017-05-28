package tabletop.domain.user;

import tabletop.domain.IdComparableEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by Kuba on 2017-05-28.
 */

@Entity
public class PasswordResetToken extends IdComparableEntity {

    private String token;

    private Date expiryDate;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    public PasswordResetToken() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getDate() {
        return expiryDate;
    }

    public void setDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return getToken();
    }

}
