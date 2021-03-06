package tabletop.domain.match;

import org.hibernate.validator.constraints.Range;
import tabletop.domain.IdComparableEntity;
import tabletop.domain.game.Game;
import tabletop.domain.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@MappedSuperclass
public abstract class Match extends IdComparableEntity {
    @NotNull(message = "{match.startDate}")
    private Date startDate;

    @NotNull(message = "{match.endDate}")
    private Date endDate;

    @NotNull(message = "{match.users}")
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "tournament_users",
            joinColumns = @JoinColumn(name = "tournament_id"),
            inverseJoinColumns = @JoinColumn(name = "users_id"))
    private Set<User> users;

    @Enumerated(EnumType.STRING)
    private Game game;

    @NotNull(message = "{match.minPlayers.not_null}")
    @Range(min = 2L, message = "{match.minPlayers.min}")
    private Integer minPlayers;

    @NotNull(message = "{match.maxPlayers.not_null}")
    @Range(min = 2L, message = "{match.maxPlayers.min}")
    private Integer maxPlayers;

    @Enumerated(EnumType.STRING)
    private MatchEndStatus endStatus;

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<User> pending;

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<User> discarded;

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

    public MatchEndStatus getEndStatus() {
        return endStatus;
    }

    public void setEndStatus(MatchEndStatus endStatus) {
        this.endStatus = endStatus;
    }

    public int getMinPlayers() {
        return minPlayers;
    }

    public void setMinPlayers(Integer minPlayers) {
        this.minPlayers = minPlayers;
    }

    public int getMaxPlayers() {
        return maxPlayers;
    }

    public void setMaxPlayers(Integer maxPlayers) {
        this.maxPlayers = maxPlayers;
    }

    public Set<User> getPending() {
        return pending;
    }

    public void setPending(Set<User> pending) {
        this.pending = pending;
    }

    public Set<User> getDiscarded() {
        return discarded;
    }

    public void setDiscarded(Set<User> discarded) {
        this.discarded = discarded;
    }

    public abstract String getGameName();
}
