package tabletop.domain.match.tournament.swiss;

import tabletop.domain.match.tournament.TournamentProcess;
import tabletop.domain.user.User;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

/**
 * Created by Rafal on 2017-05-03.
 */
@Embeddable
public class SwissResultId implements Serializable {
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @ManyToOne
    @JoinColumn(name = "tournament_id", nullable = false)
    private TournamentProcess tournamentProcess;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public TournamentProcess getTournamentProcess() {
        return tournamentProcess;
    }

    public void setTournamentProcess(TournamentProcess tournamentProcess) {
        this.tournamentProcess = tournamentProcess;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SwissResultId that = (SwissResultId) o;

        if (user != null ? !user.equals(that.user) : that.user != null) return false;
        return tournamentProcess != null ? tournamentProcess.equals(that.tournamentProcess) : that.tournamentProcess == null;
    }

    @Override
    public int hashCode() {
        int result = user != null ? user.hashCode() : 0;
        result = 31 * result + (tournamentProcess != null ? tournamentProcess.hashCode() : 0);
        return result;
    }
}
