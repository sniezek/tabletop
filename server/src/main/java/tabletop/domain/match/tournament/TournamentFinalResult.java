package tabletop.domain.match.tournament;

import tabletop.domain.user.User;

import javax.persistence.*;

/**
TournamentFinalResult stores final results of tournaments for each user separately,
records are saved after finishing the tournament.

 * points:int - all points earned by the user during the tournament
 * place:int - the place that the user won in the tournament

 */

@Entity
public class TournamentFinalResult {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "tournament")
    private Tournament tournament;

    @Column
    private int points;

    @Column
    private int place;

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tournament getTournament() {
        return tournament;
    }

    public void setTournament(Tournament tournament) {
        this.tournament = tournament;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getPlace() {
        return place;
    }

    public void setPlace(int place) {
        this.place = place;
    }
}
