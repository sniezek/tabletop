package tabletop.controllers.utils;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class PathVariableValidator extends ControllerValidator {
    public void validatePathVariableIsId(String pathVariable, Errors errors) {
        try {
            Long.valueOf(pathVariable);
        } catch (NumberFormatException e) {
            errorHandler.addInvalidPathVariableError(errors);
        }
    }
}
