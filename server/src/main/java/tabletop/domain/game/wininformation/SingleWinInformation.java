package tabletop.domain.game.wininformation;

import javax.validation.constraints.NotNull;

public class SingleWinInformation {
    @NotNull
    private Long tournamentId;
    @NotNull
    private String winnerUsername;

    public SingleWinInformation() {
    }

    public String getWinnerUsername() {
        return winnerUsername;
    }

    public void setWinnerUsername(String winnerUsername) {
        this.winnerUsername = winnerUsername;
    }

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Long tournamentId) {
        this.tournamentId = tournamentId;
    }
}
