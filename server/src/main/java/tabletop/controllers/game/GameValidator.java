package tabletop.controllers.game;

import org.springframework.stereotype.Component;
import tabletop.controllers.validation.ControllerValidator;
import tabletop.controllers.validation.errors.ControllerErrors;
import tabletop.domain.user.User;

import java.util.List;

import static java.util.Objects.isNull;

@Component
class GameValidator extends ControllerValidator {
    void validateUsers(List<User> users, ControllerErrors errors) {
        if (users.stream().anyMatch(user -> isNull(user) || isNull(user.getId()))) {
            errorHandler.addIncorrectRequestError(errors);
        }
    }
}
