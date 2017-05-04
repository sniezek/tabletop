package tabletop.domain.ranking;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(
        uniqueConstraints = {@UniqueConstraint(columnNames = {"userId", "gameName"})}
)
public class TournamentRanking {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private Long userId;

    @NotNull
    private String gameName;

    private Long points;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public Long getPoints() {
        return points;
    }

    public void setPoints(Long points) {
        this.points = points;
    }
}
