package tabletop.controllers.event.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import tabletop.domain.game.Game;
import tabletop.domain.user.User;

import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.function.BiFunction;
import java.util.stream.Collectors;

abstract class EventMatchDto {
    private static final BiFunction<Set<User>, User, Set<User>> FILTER_OUT_OTHER_USERS = (users, user) -> users.stream().filter(u -> u.equals(user)).collect(Collectors.toSet());

    private final Long id;
    private final Date startDate;
    private final Date endDate;
    private final Set<User> users;
    private final Game game;
    private final Integer minPlayers;
    private final Integer maxPlayers;
    private final Set<User> pending;
    private final Set<User> discarded;

    EventMatchDto(Long id, Date startDate, Date endDate, Set<User> users, Game game, Integer minPlayers, Integer maxPlayers, Set<User> pending, Set<User> discarded, Optional<User> userOptional) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.users = users;
        this.game = game;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (pending != null) {
                this.pending = FILTER_OUT_OTHER_USERS.apply(pending, user);
            } else {
                this.pending = new HashSet<>();
            }
            if (discarded != null) {
                this.discarded = FILTER_OUT_OTHER_USERS.apply(discarded, user);
            } else {
                this.discarded = new HashSet<>();
            }
        } else {
            this.pending = new HashSet<>();
            this.discarded = new HashSet<>();
        }
    }

    public Long getId() {
        return id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public Set<User> getUsers() {
        return users;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public Game getGame() {
        return game;
    }

    public Integer getMinPlayers() {
        return minPlayers;
    }

    public Integer getMaxPlayers() {
        return maxPlayers;
    }

    public Set<User> getPending() {
        return pending;
    }

    public Set<User> getDiscarded() {
        return discarded;
    }
}
