package tabletop.domain.ranking;

import tabletop.domain.IdComparableEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(
        uniqueConstraints = {@UniqueConstraint(columnNames = {"userId", "gameName"})}
)
public class GameRanking extends IdComparableEntity {
    private Long userId;
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
