package tabletop.domain.match.tournament;

import org.hibernate.validator.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonIgnore;
import tabletop.domain.match.Match;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import javax.persistence.*;
import java.util.List;

@Entity
public class Tournament extends Match {
    @NotEmpty(message = "{tournament.name}")
    private String name;
    @NotNull(message = "{tournament.type}")
    @Enumerated(EnumType.STRING)
    private TournamentType type;
    private String results;

    private boolean finished;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private TournamentProcess tournamentProcess;

    @OneToMany(mappedBy = "user", fetch= FetchType.LAZY, cascade={CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JsonIgnore
    private List<TournamentFinalResult> tournamentFinalResults;

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

    public List<TournamentFinalResult> getTournamentFinalResults() {
        return tournamentFinalResults;
    }

    public void setTournamentFinalResults(List<TournamentFinalResult> tournamentFinalResults) {
        this.tournamentFinalResults = tournamentFinalResults;
    }

    @Override
    public String getGameName() {
        return getGame().getName();
    }
}
