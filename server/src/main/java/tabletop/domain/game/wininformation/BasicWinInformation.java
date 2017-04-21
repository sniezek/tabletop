package tabletop.domain.game.wininformation;

import tabletop.domain.user.User;

import java.util.Collection;
import java.util.Set;

public class BasicWinInformation implements WinInformation {
    private Set<User> winners;

    public BasicWinInformation() {
    }

    @Override
    public Collection<User> getWinners() {
        return winners;
    }

}
