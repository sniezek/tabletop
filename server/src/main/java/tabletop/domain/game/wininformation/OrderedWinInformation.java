package tabletop.domain.game.wininformation;

import tabletop.domain.user.User;

import java.util.List;

public class OrderedWinInformation implements WinInformation {
    private List<User> winners;

    public OrderedWinInformation() {
    }

    @Override
    public List<User> getWinners() {
        return winners;
    }

    public void setWinners(List<User> users) {
        this.winners = winners;
    }
}
