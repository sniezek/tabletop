package tabletop.domain.match.tournament.swiss;

import tabletop.domain.match.tournament.TournamentProcess;
import tabletop.domain.user.User;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Entity
@PrimaryKeyJoinColumn(name = "id", referencedColumnName = "id")
public class SwissTournamentProcess extends TournamentProcess {

    private boolean ranked;

    @OneToMany(mappedBy = "id.tournamentProcess")
    private List<SwissPlayerResult> playerResults;

    @ManyToOne
    @JoinColumn(name="bye_user")
    private User byeUser;

    public Optional<SwissPlayerResult> getResultByUser(User user) {
        return playerResults.stream()
                .filter(result -> result.getId().getUser().getId().equals(user.getId()))
                .findAny();
    }

    public void setRanked(boolean ranked) {
        this.ranked = ranked;
    }

    public boolean isRanked() {
        return ranked;
    }

    public List<SwissPlayerResult> getPlayerResults() {
        return playerResults;
    }

    public void setPlayerResults(List<SwissPlayerResult> playerResults) {
        this.playerResults = playerResults;
    }

    public User getByeUser() {
        return byeUser;
    }

    public void setByeUser(User byeUser) {
        this.byeUser = byeUser;
    }
}
