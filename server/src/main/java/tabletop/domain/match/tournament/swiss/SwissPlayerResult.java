package tabletop.domain.match.tournament.swiss;

import tabletop.domain.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class SwissPlayerResult implements Comparable<SwissPlayerResult> {
    @EmbeddedId
    private SwissResultId id;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "swiss_users_played",
            joinColumns = {
                    @JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false),
                    @JoinColumn(name = "tournament_id", referencedColumnName = "tournament_id", insertable = false, updatable = false)
            },
            inverseJoinColumns = @JoinColumn(name = "played_user_id", referencedColumnName = "id"))
    private List<User> usersPlayed;
    @NotNull
    private Integer result = 0;
    @ManyToOne
    @JoinColumn(name = "current_opponent_id")
    private User currentOpponent;
    @NotNull
    private Integer currentScore;

    public SwissResultId getId() {
        return id;
    }

    public void setId(SwissResultId id) {
        this.id = id;
    }

    public List<User> getUsersPlayed() {
        return usersPlayed;
    }

    public void setUsersPlayed(List<User> usersPlayed) {
        this.usersPlayed = usersPlayed;
    }

    public Integer getResult() {
        return result;
    }

    public void setResult(Integer result) {
        this.result = result;
    }

    public void win() {
        result++;
        currentScore = 1;
    }

    public void lose() {
        currentScore = -1;
    }

    public User getCurrentOpponent() {
        return currentOpponent;
    }

    public void setCurrentOpponent(User currentOpponent) {
        this.currentOpponent = currentOpponent;
    }

    public Integer getCurrentScore() {
        return currentScore;
    }

    public void setCurrentScore(Integer currentScore) {
        this.currentScore = currentScore;
    }

    @Override
    public int compareTo(SwissPlayerResult o) {
        return id.getUser().getId().compareTo(o.getId().getUser().getId());
    }
}
