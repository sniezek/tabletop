package tabletop.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.Objects;

/* Note that equals and hashCode will only work if id is already assigned (either manually or after entity persistence) */
@MappedSuperclass
public abstract class IdComparableEntity {
    @Id
    @GeneratedValue
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }

        if (obj instanceof IdComparableEntity) {
            IdComparableEntity entity = (IdComparableEntity) obj;

            return Objects.equals(id, entity.getId());
        }

        return false;
    }
}
