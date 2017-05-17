package tabletop.domain.game.wininformation;

import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;

public class SingleWinInformation {
    @NotNull(message = "{single_win_information.tournament_id}")
    private Long tournamentId;
    @NotEmpty(message = "{single_win_information.winner_username}")
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
