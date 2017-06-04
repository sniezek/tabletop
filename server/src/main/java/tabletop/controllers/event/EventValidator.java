package tabletop.controllers.event;

import com.google.common.base.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import tabletop.controllers.validation.ControllerValidator;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.match.Match;
import tabletop.domain.match.Sparring;
import tabletop.domain.match.tournament.Tournament;
import tabletop.domain.user.User;
import tabletop.services.UserService;

import java.util.Date;
import java.util.Optional;
import java.util.Set;

import static java.util.Objects.nonNull;
import static tabletop.utils.NotNullUtils.areAllNotNull;
import static tabletop.utils.NotNullUtils.getNotNullCount;

@Component
class EventValidator extends ControllerValidator {
    @Autowired
    private UserService userService;

    void validateNewLocation(Location location, BindingResult bindingResult, ControllerErrors errors) {
        validator.validate(location, bindingResult);
        errors.addBindingResultErrorMessages(bindingResult);
    }

    void validateLocationExists(Optional<Location> location, ControllerErrors errors) {
        if (!location.isPresent()) {
            errorHandler.addError(errors, "location.not_found");
        }
    }

    void validateMatches(Event event, ControllerErrors errors) {
        Set<Match> matches = event.getMatches();

        if (matches.isEmpty()) {
            errorHandler.addError(errors, "event.no_matches");
        }

        User user = userService.getAuthenticatedUser().get();

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
            Set<User> users = match.getUsers();
            if (!users.isEmpty() && !users.contains(user)) {
                errorHandler.addIncorrectRequestError(errors);
            }
        }

        validateUserIsNotAssignedToCollidingMatches(user, matches, errors);
    }

    private void validateUserIsNotAssignedToCollidingMatches(User user, Set<Match> matches, ControllerErrors errors) {
        for (Match match : matches) {
            for (Match match2 : matches) {
                if (!match.equals(match2) && match.getUsers().contains(user) && match2.getUsers().contains(user) && match2.getEndDate().after(match.getStartDate()) && match2.getStartDate().before(match.getEndDate())) {
                    errorHandler.addIncorrectRequestError(errors);
                    return;
                }
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
            if (tournament.isFinished()) {
                errorHandler.addIncorrectRequestError(errors);
            }
        }
    }

    void validateOrganiserIsNotSet(Event event, ControllerErrors errors) {
        if (event.getOrganiser() != null) {
            errorHandler.addError(errors, "request.incorrect");
        }
    }

    void validateLocationFilters(Double lat, Double lng, Integer radius, ControllerErrors errors) {
        long presentFiltersCount = getNotNullCount(lat, lng, radius);

        if (presentFiltersCount > 0 && (presentFiltersCount < 3 || lat < -90 || lat > 90 || lng < -180 || lat > 180 || radius < 0)) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }

    void validateTypeFilter(String type, ControllerErrors errors) {
        if (nonNull(type) && !type.equals("tournament") && !type.equals("sparring")) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }

    void validateDateFilters(Long startDateTimestamp, Long endDateTimestamp, ControllerErrors errors) {
        if (areAllNotNull(startDateTimestamp, endDateTimestamp) && new Date(startDateTimestamp).after(new Date(endDateTimestamp))) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }

    boolean isUserEventOrganiser(Event event) {
        return event.getOrganiser().equals(userService.getAuthenticatedUser().get());
    }
}
