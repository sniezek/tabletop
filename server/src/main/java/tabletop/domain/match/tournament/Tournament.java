package tabletop.domain.match.tournament;

import org.hibernate.validator.constraints.NotEmpty;
import tabletop.domain.match.Match;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

@Entity
public class Tournament extends Match {
    @NotEmpty(message = "{tournament.name}")
    private String name;
    @NotNull(message = "{tournament.type}")
    @Enumerated(EnumType.STRING)
    private TournamentType type;
    private String results;

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

    @Override
    public String getGameName() {
        return getGame().getName();
    }
}
