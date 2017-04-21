package tabletop.domain.match.tournament;

import tabletop.domain.match.Match;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class Tournament extends Match {
    @Enumerated(EnumType.STRING)
    private TournamentType tournamentType;
    private String results;

    public Tournament() {
    }

    public String getCustomGameName() {
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
}
