package tabletop.controllers.event;

import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import tabletop.controllers.validation.PathVariableValidator;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.match.Match;
import tabletop.domain.match.Sparring;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.user.User;
import tabletop.services.UserService;
import tabletop.utils.ValuePresenceUtils;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
class EventValidator extends PathVariableValidator {
    @Autowired
    private UserService userService;

    void validateNewLocation(Location location, BindingResult bindingResult) {
        validator.validate(location, bindingResult);
    }

    void validateExistingLocation(Optional<Location> location, ControllerErrors errors) {
        if (!location.isPresent()) {
            errorHandler.addError(errors, "location.not_found");
        }
    }

    void validateMatches(Event event, ControllerErrors errors) {
        Set<Match> matches = event.getMatches();

        if (matches.isEmpty()) {
            errorHandler.addError(errors, "event.no_matches");
        }

        for (Match match : matches) {
            if (match.getStartDate().after(match.getEndDate())) {
                errorHandler.addError(errors, "match.incorrect_dates");
            }
            if (match.getMinPlayers() > match.getMaxPlayers()) {
                errorHandler.addError(errors, "match.incorrect_min_max_players");
            }
            if (match.getEndStatus() != null) {
                errorHandler.addIncorrectRequestError(errors);
            }
        }
    }

    void validateSparringsGameInformation(Event event, ControllerErrors errors) {
        for (Sparring sparring : event.getSparrings()) {
            if (Strings.isNullOrEmpty(sparring.getGameName())) {
                errorHandler.addError(errors, "sparring.no_game");
                return;
            }
        }
    }

    void validateTournaments(Event event, ControllerErrors errors) {
        for (Tournament tournament : event.getTournaments()) {
            if (!tournament.isRegisteredGame()) {
                errorHandler.addError(errors, "tournament.unregistered_game");
            }
            if (tournament.getResults() != null) {
                errorHandler.addIncorrectRequestError(errors);
            }
        }
    }

    void validateOrganiserIsNotSet(Event event, ControllerErrors errors) {
        if (event.getOrganiser() != null) {
            errorHandler.addError(errors, "request.incorrect");
        }
    }

    void validateExistingEvent(Optional<Event> event, ControllerErrors errors) {
        if (event.isPresent()) {
            validateUserIsOrganiser(event.get());
        } else {
            errorHandler.addError(errors, "event.not_exists");
        }
    }

    void validateLocationFilters(Double lat, Double lng, Integer radius, ControllerErrors errors) {
        long presentFiltersCount = ValuePresenceUtils.getPresentCount(lat, lng, radius);

        if (presentFiltersCount > 0 && (presentFiltersCount < 3 || lat < -90 || lat > 90 || lng < -180 || lat > 180 || radius < 0)) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }

    void validateGames(List<String> games, ControllerErrors errors) {
        if (ValuePresenceUtils.isPresent(games)) {
            for (String game : games) {
                if (!game.toLowerCase().equals(game)) {
                    errorHandler.addIncorrectRequestError(errors);
                    return;
                }
            }
        }
    }

    void validateTypeFilter(String type, ControllerErrors errors) {
        if (ValuePresenceUtils.isPresent(type) && !type.equals("tournament") && !type.equals("sparring")) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }

    void validateDateFilters(Long startDateTimestamp, Long endDateTimestamp, ControllerErrors errors) {
        if (ValuePresenceUtils.areAllPresent(startDateTimestamp, endDateTimestamp) && new Date(startDateTimestamp).after(new Date(endDateTimestamp))) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }

    private void validateUserIsOrganiser(Event event) {
        User user = userService.getAuthenticatedUser().get();

        if (!event.getOrganiser().equals(user)) {
            errorHandler.accessDenied();
        }
    }
}
