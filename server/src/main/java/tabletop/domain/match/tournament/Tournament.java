package tabletop.domain.match.tournament;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotEmpty;
import tabletop.domain.match.Match;
import tabletop.domain.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Tournament extends Match {
    @NotEmpty(message = "{tournament.name}")
    private String name;
    @NotNull(message = "{tournament.type}")
    @Enumerated(EnumType.STRING)
    private TournamentType type;

    private boolean finished;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    @JsonIgnore
    private TournamentProcess tournamentProcess;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JsonIgnore
    private List<TournamentPlayerResult> tournamentPlayerResults;

    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    private User creator;

    public Tournament() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TournamentType getType() {
        return type;
    }

    public void setType(TournamentType type) {
        this.type = type;
    }

    public boolean isFinished() {
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

    public TournamentProcess getTournamentProcess() {
        return tournamentProcess;
    }

    public void setTournamentProcess(TournamentProcess tournamentProcess) {
        this.tournamentProcess = tournamentProcess;
    }

    public List<TournamentPlayerResult> getTournamentPlayerResults() {
        return tournamentPlayerResults;
    }

    public void setTournamentPlayerResults(List<TournamentPlayerResult> tournamentPlayerResults) {
        this.tournamentPlayerResults = tournamentPlayerResults;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    @Override
    public String getGameName() {
        return getGame().getName();
    }
}
