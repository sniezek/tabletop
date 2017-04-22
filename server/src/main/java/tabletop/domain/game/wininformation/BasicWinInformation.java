package tabletop.domain.game.wininformation;

import tabletop.domain.user.User;

import java.util.Set;

public class BasicWinInformation implements WinInformation {
    private Set<User> winners;

    public BasicWinInformation() {
    }

    @Override
    public Set<User> getWinners() {
        return winners;
    }

    public void setWinners(Set<User> winners) {
        this.winners = winners;
    }
}
