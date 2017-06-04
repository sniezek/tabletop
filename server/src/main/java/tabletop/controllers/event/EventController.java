package tabletop.controllers.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tabletop.controllers.event.dto.EventInfoDto;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentDetailsDTO;
import tabletop.services.event.EventService;
import tabletop.services.event.LocationService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.Objects.nonNull;

@RestController
@RequestMapping(value = "/events")
public class EventController {
    @Autowired
    private EventValidator validator;
    @Autowired
    private EventService eventService;
    @Autowired
    private LocationService locationService;

    @GetMapping
    public ResponseEntity<?> getEvents(
            @RequestParam(required = false) Double lat, @RequestParam(required = false) Double lng, @RequestParam(required = false) Integer radius,
            @RequestParam(required = false) List<String> games,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) Long startDate, @RequestParam(required = false) Long endDate) {
        ControllerErrors errors = new ControllerErrors();

        validator.validateLocationFilters(lat, lng, radius, errors);
        validator.validateTypeFilter(type, errors);
        validator.validateDateFilters(startDate, endDate, errors);

        return errors.areErrors() ? ResponseUtils.badRequest(errors) : ResponseEntity.ok(eventService.getEvents(lat, lng, radius, games, type, startDate, endDate).stream().map(EventInfoDto::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventInfoDto> getEvent(@PathVariable Long id) {
        return eventService.getEventById(id).map(event -> ResponseEntity.ok(new EventInfoDto(event))).orElse(ResponseUtils.notFound());
    }

    @GetMapping("/getTournaments/{id}")
    public ResponseEntity<List<TournamentDetailsDTO>> getEventTournaments(@PathVariable Long id) {
        return eventService.getEventById(id)
                .map(event -> ResponseEntity.ok(event.getTournaments().stream()
                        .map(this::createTournamentDetailsDTO).collect(Collectors.toList())))
                .orElse(ResponseUtils.notFound());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEvent(@Valid @RequestBody Event event, BindingResult bindingResult, @PathVariable Long id) {
        Optional<Event> updatedEvent = eventService.getEventById(id);
        if (!updatedEvent.isPresent()) {
            return ResponseUtils.notFound();
        }

        if (!validator.isUserEventOrganiser(updatedEvent.get())) {
            return ResponseUtils.forbidden();
        }

        ControllerErrors errors = new ControllerErrors(bindingResult);
        if (errors.areErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        validateEvent(event, errors);
        validateAndHandleLocation(event, bindingResult, errors);

        return errors.areErrors() ? ResponseUtils.badRequest(errors) : ResponseEntity.ok(new EventInfoDto(eventService.updateEvent(id, event)));
    }

    @PostMapping
    public ResponseEntity<?> createEvent(@Valid @RequestBody Event event, BindingResult bindingResult) {
        ControllerErrors errors = new ControllerErrors(bindingResult);
        if (errors.areErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        validateEvent(event, errors);
        validateAndHandleLocation(event, bindingResult, errors);

        return errors.areErrors() ? ResponseUtils.badRequest(errors) : ResponseUtils.created(new EventInfoDto(eventService.createEvent(event)));
    }

    private void validateEvent(Event event, ControllerErrors errors) {
        validator.validateMatches(event, errors);
        validator.validateSparringsGameInformation(event, errors);
        validator.validateTournaments(event, errors);
        validator.validateOrganiserIsNotSet(event, errors);
    }

    private void validateAndHandleLocation(Event event, BindingResult bindingResult, ControllerErrors errors) {
        Location location = event.getLocation();

        if (isNewLocation(location)) {
            validator.validateNewLocation(location, bindingResult, errors);

            if (errors.noErrors()) {
                locationService.addLocation(location);
            }
        } else {
            Optional<Location> requestedLocation = locationService.getLocationById(location.getId());
            validator.validateLocationExists(requestedLocation, errors);

            if (errors.noErrors()) {
                event.setLocation(requestedLocation.get());
            }
        }
    }

    private boolean isNewLocation(Location location) {
        return location.getId() == null;
    }


    private TournamentDetailsDTO createTournamentDetailsDTO(Tournament tournament) {
        return new TournamentDetailsDTO(
                tournament.getId(),
                tournament.getName(),
                nonNull(tournament.getTournamentProcess()) && tournament.getTournamentProcess().isInitialized());
    }
}
