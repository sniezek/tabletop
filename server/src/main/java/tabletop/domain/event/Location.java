package tabletop.domain.event;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Location {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull(message = "{location.lat}")
    private Double lat;
    @NotNull(message = "{location.lng}")
    private Double lng;
    @NotEmpty(message = "{location.name}")
    private String name;
    private String address;
//    @OneToMany(cascade = CascadeType.ALL)
//    private Set<Event> events;

    public Location() {
    }

    public Long getId() {
        return id;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
