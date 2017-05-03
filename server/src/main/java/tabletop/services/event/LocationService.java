package tabletop.services.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.event.Location;
import tabletop.repositories.event.LocationRepository;

import java.util.Optional;

@Service
public class LocationService {
    @Autowired
    private LocationRepository locationRepository;

    public Optional<Location> getLocationById(Long id) {
        return Optional.ofNullable(locationRepository.findOne(id));
    }

    public Location addLocation(Location location) {
        return locationRepository.save(location);
    }
}
