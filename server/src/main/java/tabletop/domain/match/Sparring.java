package tabletop.domain.match;

import javax.persistence.Entity;

@Entity
public class Sparring extends Match {
    private String customGameName;

    public Sparring() {
    }

    public String getCustomGameName() {
        return isRegisteredGame() ? getGame().getName() : customGameName;
    }

    public void setCustomGameName(String customGameName) {
        this.customGameName = customGameName;
    }
}
