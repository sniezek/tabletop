package tabletop.domain.match.tournament.swiss;

import tabletop.domain.match.tournament.TournamentProcess;
import tabletop.domain.user.User;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

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
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SwissResultId) {
            SwissResultId entity = (SwissResultId) obj;

            return Objects.equals(user, entity.getUser())
                    && Objects.equals(tournamentProcess, entity.getTournamentProcess());
        }

        return false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, tournamentProcess);
    }
}
