package tabletop.domain.match.tournament;

import com.fasterxml.jackson.annotation.JsonIgnore;
import tabletop.domain.match.Match;

import javax.persistence.*;
import java.util.List;

@Entity
public class Tournament extends Match {
    @Enumerated(EnumType.STRING)
    private TournamentType tournamentType;

    private String results;

    private boolean finished;

//    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private TournamentProcess tournamentProcess;

    @OneToMany(mappedBy = "user", fetch= FetchType.LAZY, cascade={CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JsonIgnore
    private List<TournamentFinalResult> tournamentFinalResults;

    public Tournament() {
    }

    @Override
    public String getGameName() {
        return getGame().getName();
    }

    public TournamentType getTournamentType() {
        return tournamentType;
    }

    public void setTournamentType(TournamentType tournamentType) {
        this.tournamentType = tournamentType;
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

//    public TournamentProcess getTournamentProcess() {
//        return tournamentProcess;
//    }
//
//    public void setTournamentProcess(TournamentProcess tournamentProcess) {
//        this.tournamentProcess = tournamentProcess;
//    }


    public List<TournamentFinalResult> getTournamentFinalResults() {
        return tournamentFinalResults;
    }

    public void setTournamentFinalResults(List<TournamentFinalResult> tournamentFinalResults) {
        this.tournamentFinalResults = tournamentFinalResults;
    }
}
