package tabletop.domain.match;

import tabletop.domain.game.Game;
import tabletop.domain.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@MappedSuperclass
public abstract class Match {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    private Date startDate;
    @NotNull
    private Date endDate;
    @OneToMany
    private Set<User> users;
    @ManyToOne
    private Game game;
    private int minPlayers;
    private int maxPlayers;
    @Enumerated(EnumType.STRING)
    private MatchResultStatus resultStatus;

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public boolean isRegisteredGame() {
        return game != null;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public MatchResultStatus getResultStatus() {
        return resultStatus;
    }

    public void setResultStatus(MatchResultStatus resultStatus) {
        this.resultStatus = resultStatus;
    }

    public abstract String getGameName();
}
