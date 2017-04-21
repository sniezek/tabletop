package tabletop.domain.game.wininformation;

import tabletop.domain.user.User;

import java.util.Collection;

public interface WinInformation {
    Collection<User> getWinners();
}
