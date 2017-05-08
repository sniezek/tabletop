package tabletop.services.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.event.Location;
import tabletop.repositories.event.LocationRepository;

import java.util.Optional;

@Service
public class LocationService {
    private static final int EARTH_RADIUS_IN_KM = 6371;

    @Autowired
    private LocationRepository locationRepository;

    public Optional<Location> getLocationById(Long id) {
        return Optional.ofNullable(locationRepository.findOne(id));
    }

    public Location addLocation(Location location) {
        return locationRepository.save(location);
    }

    static boolean isLocationWithinRadiusFromPoint(Location location, int radius, double pointLat, double pointLng) {
        double locationLat = location.getLat();
        double locationLng = location.getLng();

        double latDistance = Math.toRadians(pointLat - locationLat);
        double lngDistance = Math.toRadians(pointLng - locationLng);

        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(pointLat)) * Math.cos(Math.toRadians(locationLat))
                * Math.sin(lngDistance / 2) * Math.sin(lngDistance / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return Math.round(EARTH_RADIUS_IN_KM * c) <= radius;
    }
}
