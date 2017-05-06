package tabletop.domain.game.wininformation;

import tabletop.domain.user.User;

import java.util.Set;

public class SingleWinInformation {
    private User winner;
    private Long tournamentId;

    public SingleWinInformation() {
    }

    public User getWinner() {
        return winner;
    }

    public void setWinner(User winner) {
        this.winner = winner;
    }

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Long tournamentId) {
        this.tournamentId = tournamentId;
    }
}
