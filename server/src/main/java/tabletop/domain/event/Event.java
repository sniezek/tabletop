package tabletop.domain.event;

import tabletop.domain.match.Sparring;
import tabletop.domain.match.tournament.Tournament;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@Entity
public class Event {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    private String name;
    @OneToMany
    private Set<Sparring> sparrings;
    @OneToMany
    private Set<Tournament> tournaments;

    public Event() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Sparring> getSparrings() {
        return sparrings;
    }

    public void setSparrings(Set<Sparring> sparrings) {
        this.sparrings = sparrings;
    }

    public Set<Tournament> getTournaments() {
        return tournaments;
    }

    public void setTournaments(Set<Tournament> tournaments) {
        this.tournaments = tournaments;
    }

    public Date getStartDate() {
        return null; // iterate sparrings and tournaments and get the earliest start date
    }

    public Date getEndDate() {
        return null; // iterate sparrings and tournaments and get the latest end date
    }
}
