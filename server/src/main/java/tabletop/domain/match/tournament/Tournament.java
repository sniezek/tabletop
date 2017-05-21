package tabletop.domain.match.tournament;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotEmpty;
import tabletop.domain.match.Match;

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
    private String results;
    private boolean canBeFinished;
    private boolean finished;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private TournamentProcess tournamentProcess;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JsonIgnore
    private List<TournamentPlayerResult> tournamentPlayerResults;

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

    public String getResults() {
        return results;
    }

    public void setResults(String results) {
        this.results = results;
    }

    public boolean isCanBeFinished() {
        return canBeFinished;
    }

    public void setCanBeFinished(boolean canBeFinished) {
        this.canBeFinished = canBeFinished;
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

    @Override
    public String getGameName() {
        return getGame().getName();
    }
}
