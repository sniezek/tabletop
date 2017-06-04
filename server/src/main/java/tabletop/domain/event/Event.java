package tabletop.domain.event;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.collect.Sets;
import org.hibernate.validator.constraints.NotEmpty;
import tabletop.domain.IdComparableEntity;
import tabletop.domain.match.Match;
import tabletop.domain.match.Sparring;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.user.User;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@Entity
public class Event extends IdComparableEntity {
    @NotEmpty(message = "{event.name}")
    private String name;

    @NotNull(message = "{event.description}")
    private String description;

    @NotNull(message = "{event.location}")
    @ManyToOne
    private Location location;

    @Valid
    @NotNull(message = "{event.sparrings}")
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Sparring> sparrings;

    @Valid
    @NotNull(message = "{event.tournaments}")
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Tournament> tournaments;

    @ManyToOne
    private User organiser;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
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

    public User getOrganiser() {
        return organiser;
    }

    public void setOrganiser(User organiser) {
        this.organiser = organiser;
        this.tournaments.forEach(tournament -> tournament.setCreator(organiser));
    }

    @JsonIgnore
    public Set<Match> getMatches() {
        return Sets.union(sparrings, tournaments);
    }

    public Date getStartDate() {
        return getMatches().stream()
                .map(Match::getStartDate)
                .min(Date::compareTo)
                .get();
    }

    public Date getEndDate() {
        return getMatches().stream()
                .map(Match::getEndDate)
                .max(Date::compareTo)
                .get();
    }
}
