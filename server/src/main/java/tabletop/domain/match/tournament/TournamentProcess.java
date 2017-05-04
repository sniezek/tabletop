package tabletop.domain.match.tournament;

import tabletop.domain.user.User;

import javax.persistence.*;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class TournamentProcess {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(mappedBy = "tournamentProcess")
    protected Tournament tournament;

    public TournamentProcess() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Tournament getTournament() {
        return tournament;
    }

    public void setTournament(Tournament tournament) {
        this.tournament = tournament;
    }

    @Transient
    public List<User> getUsers() {
        return tournament.getUsers().stream().collect(Collectors.toList());
    }
}
