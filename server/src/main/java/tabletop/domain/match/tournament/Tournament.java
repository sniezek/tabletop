package tabletop.domain.match.tournament;

import tabletop.domain.match.Match;

import javax.persistence.*;

@Entity
public class Tournament extends Match {
    @Enumerated(EnumType.STRING)
    private TournamentType tournamentType;

    private String results;

    private boolean finished;

//    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private TournamentProcess tournamentProcess;

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
}
