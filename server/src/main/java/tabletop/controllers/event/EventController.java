package tabletop.controllers.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tabletop.controllers.event.dto.EventInfoDto;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.match.Match;
import tabletop.domain.match.MatchEndStatus;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.match.tournament.TournamentDetailsDTO;
import tabletop.domain.user.User;
import tabletop.services.UserService;
import tabletop.services.event.EventService;
import tabletop.services.event.LocationService;
import tabletop.utils.TriFunction;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.BiFunction;
import java.util.function.Function;
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
    @Autowired
    private UserService userService;

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

        return errors.areErrors() ? ResponseUtils.badRequest(errors) : ResponseEntity.ok(eventService.getEvents(lat, lng, radius, games, type, startDate, endDate).stream().map(event -> new EventInfoDto(event, userService.getAuthenticatedUser())).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventInfoDto> getEvent(@PathVariable Long id) {
        return eventService.getEventById(id).map(event -> ResponseEntity.ok(new EventInfoDto(event, userService.getAuthenticatedUser()))).orElse(ResponseUtils.notFound());
    }

    @PostMapping
    public ResponseEntity<?> createEvent(@Valid @RequestBody Event event, BindingResult bindingResult) {
        ControllerErrors errors = new ControllerErrors(bindingResult);
        if (errors.areErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        validateCreateEvent(event, errors);
        validateAndHandleLocation(event, bindingResult, errors);

        return errors.areErrors() ? ResponseUtils.badRequest(errors) : ResponseUtils.created(new EventInfoDto(eventService.createEvent(event), userService.getAuthenticatedUser()));
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

//        validateCreateEvent(event, errors);
        validateAndHandleLocation(event, bindingResult, errors);

        return errors.areErrors() ? ResponseUtils.badRequest(errors) : ResponseEntity.ok(new EventInfoDto(eventService.updateEvent(id, event), userService.getAuthenticatedUser()));
    }

    @PostMapping("/apply/{eventId}/sparring/{sparringId}")
    public ResponseEntity<Boolean> applyForSparring(@PathVariable Long eventId, @PathVariable Long sparringId) {
        return applyForMatch(eventId, sparringId, Event::getSparrings);
    }

    @PostMapping("/apply/{eventId}/tournament/{tournamentId}")
    public ResponseEntity<Boolean> applyForTournament(@PathVariable Long eventId, @PathVariable Long tournamentId) {
        return applyForMatch(eventId, tournamentId, Event::getTournaments);
    }

    @PostMapping("/resign/{eventId}/sparring/{sparringId}")
    public ResponseEntity<Boolean> resignFromSparring(@PathVariable Long eventId, @PathVariable Long sparringId) {
        return resignFromMatch(eventId, sparringId, Event::getSparrings);
    }

    @PostMapping("/resign/{eventId}/tournament/{tournamentId}")
    public ResponseEntity<Boolean> resignFromTournament(@PathVariable Long eventId, @PathVariable Long tournamentId) {
        return resignFromMatch(eventId, tournamentId, Event::getTournaments);
    }

    @PostMapping("/accept/{eventId}/sparring/{sparringId}/{userId}")
    public ResponseEntity<Boolean> acceptUserForSparring(@PathVariable Long eventId, @PathVariable Long sparringId, @PathVariable Long userId) {
        return acceptForMatch(eventId, sparringId, userId, Event::getSparrings);
    }

    @PostMapping("/accept/{eventId}/tournament/{tournamentId}/{userId}")
    public ResponseEntity<Boolean> acceptUserForTournament(@PathVariable Long eventId, @PathVariable Long tournamentId, @PathVariable Long userId) {
        return acceptForMatch(eventId, tournamentId, userId, Event::getTournaments);
    }

    @PostMapping("/discard/{eventId}/sparring/{sparringId}/{userId}")
    public ResponseEntity<Boolean> discardUserFromSparring(@PathVariable Long eventId, @PathVariable Long sparringId, @PathVariable Long userId) {
        return discardFromMatch(eventId, sparringId, userId, Event::getSparrings);
    }

    @PostMapping("/discard/{eventId}/tournament/{tournamentId}/{userId}")
    public ResponseEntity<Boolean> discardUserFromTournament(@PathVariable Long eventId, @PathVariable Long tournamentId, @PathVariable Long userId) {
        return discardFromMatch(eventId, tournamentId, userId, Event::getTournaments);
    }

    @PostMapping("/status/{eventId}/sparring/{sparringId}")
    public ResponseEntity setSparringMatchStatus(@PathVariable Long eventId, @PathVariable Long sparringId, @RequestBody String status) {
        return setMatchStatus(eventId, sparringId, MatchEndStatus.valueOf(status), Event::getSparrings);
    }

    @PostMapping("/status/{eventId}/tournament/{tournamentId}")
    public ResponseEntity setTournamentMatchStatus(@PathVariable Long eventId, @PathVariable Long tournamentId, @RequestBody String status) {
        return setMatchStatus(eventId, tournamentId, MatchEndStatus.valueOf(status), Event::getTournaments);
    }

    @GetMapping("/getTournaments/{id}")
    public ResponseEntity<List<TournamentDetailsDTO>> getEventTournaments(@PathVariable Long id) {
        return eventService.getEventById(id)
                .map(event -> ResponseEntity.ok(event.getTournaments().stream()
                        .map(this::createTournamentDetailsDTO).collect(Collectors.toList())))
                .orElse(ResponseUtils.notFound());
    }

    private void validateCreateEvent(Event event, ControllerErrors errors) {
        validator.validateMatches(event, errors);
        validator.validateSparringsGameInformation(event, errors);
        validator.validateTournaments(event, errors);
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

    private ResponseEntity<Boolean> applyForMatch(Long eventId, Long matchId, Function<Event, Set<? extends Match>> getEventMatches) {
        return performUserMatchOperation(eventId, matchId, getEventMatches, (event, match) -> eventService.applyForMatch(event, match));
    }

    private ResponseEntity<Boolean> resignFromMatch(Long eventId, Long matchId, Function<Event, Set<? extends Match>> getEventMatches) {
        return performUserMatchOperation(eventId, matchId, getEventMatches, (event, match) -> eventService.removeFromMatch(event, match));
    }

    private ResponseEntity<Boolean> performUserMatchOperation(Long eventId, Long matchId, Function<Event, Set<? extends Match>> getEventMatches, BiFunction<Event, Match, Boolean> operation) {
        return eventService.getEventById(eventId)
                .map(event -> getEventMatches.apply(event).stream()
                        .filter(match -> matchId.equals(match.getId()))
                        .findFirst()
                        .map(match -> ResponseEntity.ok(operation.apply(event, match)))
                        .orElseGet(ResponseUtils::notFound))
                .orElseGet(ResponseUtils::notFound);
    }

    private ResponseEntity<Boolean> acceptForMatch(Long eventId, Long matchId, Long userId, Function<Event, Set<? extends Match>> getEventMatches) {
        return performOrganiserMatchOperation(eventId, matchId, userId, getEventMatches, (event, match, user) -> eventService.acceptForMatch(event, match, user));
    }

    private ResponseEntity<Boolean> discardFromMatch(Long eventId, Long matchId, Long userId, Function<Event, Set<? extends Match>> getEventMatches) {
        return performOrganiserMatchOperation(eventId, matchId, userId, getEventMatches, (event, match, user) -> eventService.discardFromMatch(event, match, user));
    }

    private ResponseEntity<Boolean> performOrganiserMatchOperation(Long eventId, Long matchId, Long userId, Function<Event, Set<? extends Match>> getEventMatches, TriFunction<Event, Match, User, Boolean> operation) {
        Optional<Event> eventOptional = eventService.getEventById(eventId);
        if (!eventOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Event event = eventOptional.get();

        if (!validator.isUserEventOrganiser(event)) {
            return ResponseUtils.forbidden();
        }

        return userService.getUserById(userId)
                .map(user -> getEventMatches.apply(event).stream()
                        .filter(match -> matchId.equals(match.getId()))
                        .findFirst()
                        .map(match -> ResponseEntity.ok(operation.apply(event, match, user)))
                        .orElseGet(ResponseUtils::notFound))
                .orElseGet(ResponseUtils::notFound);
    }

    private ResponseEntity setMatchStatus(Long eventId, Long matchId, MatchEndStatus status, Function<Event, Set<? extends Match>> getEventMatches) {
        Optional<Event> eventOptional = eventService.getEventById(eventId);
        if (!eventOptional.isPresent()) {
            return ResponseUtils.notFound();
        }

        Event event = eventOptional.get();

        if (!validator.isUserEventOrganiser(event)) {
            return ResponseUtils.forbidden();
        }

        return getEventMatches.apply(event).stream()
                .filter(match -> matchId.equals(match.getId()))
                .findFirst()
                .map(match -> {
                    match.setEndStatus(status);

                    return new ResponseEntity<>(HttpStatus.OK);
                })
                .orElseGet(ResponseUtils::notFound);
    }

    private TournamentDetailsDTO createTournamentDetailsDTO(Tournament tournament) {
        return new TournamentDetailsDTO(
                tournament.getId(),
                tournament.getName(),
                nonNull(tournament.getTournamentProcess()) && tournament.getTournamentProcess().isInitialized());
    }
}
