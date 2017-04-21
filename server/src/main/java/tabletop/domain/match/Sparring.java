package tabletop.domain.match;

import javax.persistence.Entity;

@Entity
public class Sparring extends Match {
    private String customGameName;

    public Sparring() {
    }

    @Override
    public String getGameName() {
        return isRegisteredGame() ? getGame().getName() : customGameName;
    }

    public String getCustomGameName() {
        return customGameName;
    }

    public void setCustomGameName(String customGameName) {
        this.customGameName = customGameName;
    }
}
