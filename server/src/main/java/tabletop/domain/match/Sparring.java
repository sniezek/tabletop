package tabletop.domain.match;

import javax.persistence.Entity;

@Entity
public class Sparring extends Match {
    private String gameName;

    public Sparring() {
    }

    @Override
    public String getGameName() {
        return isRegisteredGame() ? getGame().getName() : gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }
}
