package tabletop.controllers.validation;

import org.springframework.stereotype.Component;
import tabletop.controllers.validation.errors.ControllerErrors;

@Component
public class PathVariableValidator extends ControllerValidator {
    public void validatePathVariableIsId(String pathVariable, ControllerErrors errors) {
        try {
            Long.valueOf(pathVariable);
        } catch (NumberFormatException e) {
            errorHandler.addInvalidPathVariableError(errors);
        }
    }
}
