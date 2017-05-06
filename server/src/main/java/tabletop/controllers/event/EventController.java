package tabletop.controllers.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.services.event.EventService;
import tabletop.services.event.LocationService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class EventController {
    @Autowired
    private EventValidator validator;
    @Autowired
    private EventService eventService;
    @Autowired
    private LocationService locationService;

    @RequestMapping(method = RequestMethod.GET, value = "/events")
    public List<Event> getEvents() {
        return eventService.getEvents();
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/event/{pathVariableId}")
    public ResponseEntity<?> updateEvent(@Valid @RequestBody Event event, Errors errors, @PathVariable String pathVariableId) {
        validator.validatePathVariableIsId(pathVariableId, errors);

        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        Long id = Long.valueOf(pathVariableId);

        Optional<Event> existingEvent = eventService.getEventById(id);
        validator.validateExistingEvent(existingEvent, errors);

        validateEventAndHandleLocation(event, errors);

        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        return ResponseEntity.ok(eventService.updateEvent(id, event));
    }

    @RequestMapping(method = RequestMethod.POST, value = "/events")
    public ResponseEntity<?> createEvent(@Valid @RequestBody Event event, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        validateEventAndHandleLocation(event, errors);

        return errors.hasErrors() ? ResponseUtils.badRequest(errors) : ResponseUtils.created(eventService.createEvent(event));
    }

    private void validateEventAndHandleLocation(Event event, Errors errors) {
        validator.validateMatches(event, errors);
        validator.validateSparringsGameInformation(event, errors);
        validator.validateTournaments(event, errors);
        validator.validateOrganiserIsNotSet(event, errors);

        Location location = event.getLocation();

        if (isNewLocation(location)) {
            validator.validateNewLocation(location, errors);

            if (!errors.hasErrors()) {
                locationService.addLocation(location);
            }
        } else {
            Optional<Location> existingLocation = locationService.getLocationById(location.getId());
            validator.validateExistingLocation(existingLocation, errors);

            if (!errors.hasErrors()) {
                event.setLocation(existingLocation.get());
            }
        }
    }

    private boolean isNewLocation(Location location) {
        return location.getId() == null;
    }
}
