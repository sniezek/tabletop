package tabletop.controllers.event;

import com.google.common.base.Strings;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import tabletop.controllers.utils.PathVariableValidator;
import tabletop.domain.event.Event;
import tabletop.domain.event.Location;
import tabletop.domain.match.Match;
import tabletop.domain.match.Sparring;
import tabletop.domain.match.tournament.Tournament;

import java.util.Optional;
import java.util.Set;

@Component
class EventValidator extends PathVariableValidator {
    void validateNewLocation(Location location, Errors errors) {
        validator.validate(location, errors);
    }

    void validateExistingLocation(Optional<Location> location, Errors errors) {
        if (!location.isPresent()) {
            errorHandler.addError(errors, "location.not_found");
        }
    }

    void validateMatches(Event event, Errors errors) {
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

    void validateSparringsGameInformation(Event event, Errors errors) {
        for (Sparring sparring : event.getSparrings()) {
            if (Strings.isNullOrEmpty(sparring.getGameName())) {
                errorHandler.addError(errors, "sparring.no_game");
                return;
            }
        }
    }

    void validateTournaments(Event event, Errors errors) {
        for (Tournament tournament : event.getTournaments()) {
            if (!tournament.isRegisteredGame()) {
                errorHandler.addError(errors, "tournament.unregistered_game");
            }
            if (tournament.getResults() != null) {
                errorHandler.addIncorrectRequestError(errors);
            }
        }
    }

    void validateOrganiserIsNotSet(Event event, Errors errors) {
        if (event.getOrganiser() != null) {
            errorHandler.addError(errors, "request.incorrect");
        }
    }

    void validateExistingEvent(Optional<Event> event, Errors errors) {
        if (!event.isPresent()) {
            errorHandler.addError(errors, "event.not_exists");
        }
    }
}
