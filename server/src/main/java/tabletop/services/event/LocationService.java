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

    static boolean isLocationWithinRadiusFromPoint(Location location, double radius, double lat, double lng) {
        int R = 6371; // Radius of the earth

        double locationLat = location.getLat();
        double locationLng = location.getLng();

        double latDistance = Math.toRadians(locationLat - lat);
        double lonDistance = Math.toRadians(locationLng - lng);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat)) * Math.cos(Math.toRadians(locationLat))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c * 1000 <= radius;
    }
}
