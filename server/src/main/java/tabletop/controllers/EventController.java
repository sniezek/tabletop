package tabletop.controllers;

import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tabletop.controllers.utils.ControllerErrorHandler;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.match.Match;
import tabletop.domain.match.Sparring;
import tabletop.domain.match.tournament.Tournament;
import tabletop.services.event.EventService;
import tabletop.services.event.LocationService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class EventController {
    @Autowired
    private Validator validator;
    @Autowired
    private ControllerErrorHandler errorHandler;
    @Autowired
    private EventService eventService;
    @Autowired
    private LocationService locationService;

    @RequestMapping(method = RequestMethod.GET, value = "/events")
    public List<Event> getEvents() {
        return eventService.getEvents();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/events")
    public ResponseEntity<?> createEvent(@Valid @RequestBody Event event, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        Location location = event.getLocation();

        if (isNewLocation(location)) {
            if (isLocationValid(location, errors)) {
                locationService.addLocation(location);
            }
        } else {
            Optional<Location> existingLocation = locationService.getLocationById(location.getId());

            if (existingLocation.isPresent()) {
                event.setLocation(existingLocation.get());
            } else {
                errorHandler.addError(errors, "location.not_found");
            }
        }

        validateEventHasAtLeastOneMatch(event, errors);
        validateMatchDates(event, errors);
        validateSparringsGameInformation(event, errors);
        validateTournaments(event, errors);

        return errors.hasErrors() ? ResponseUtils.badRequest(errors) : ResponseUtils.created(eventService.addEvent(event));
    }

    private void validateEventHasAtLeastOneMatch(Event event, Errors errors) {
        if (event.getMatches().isEmpty()) {
            errorHandler.addError(errors, "event.no_matches");
        }
    }

    private void validateMatchDates(Event event, Errors errors) {
        for (Match match : event.getMatches()) {
            if (match.getStartDate().after(match.getEndDate())) {
                errorHandler.addError(errors, "match.incorrect_dates");
                return;
            }
        }
    }

    private void validateSparringsGameInformation(Event event, Errors errors) {
        for (Sparring sparring : event.getSparrings()) {
            if (Strings.isNullOrEmpty(sparring.getGameName())) {
                errorHandler.addError(errors, "sparring.no_game");
                return;
            }
        }
    }

    private void validateTournaments(Event event, Errors errors) {
        for (Tournament tournament : event.getTournaments()) {
            if (!tournament.isRegisteredGame()) {
                errorHandler.addError(errors, "tournament.unregistered_game");
            }
            if (tournament.getResults() != null) {
                errorHandler.addError(errors, "tournament.results");
            }
        }
    }

    private boolean isNewLocation(Location location) {
        return location.getId() == null;
    }

    private boolean isLocationValid(Location location, Errors errors) {
        validator.validate(location, errors);

        return !errors.hasErrors();
    }
}
