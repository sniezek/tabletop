package tabletop.controllers.utils;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class PathVariableValidator extends ControllerValidator {
    public boolean validatePathVariableIsId(String pathVariable, Errors errors) {
        try {
            Long id = Long.valueOf(pathVariable);

            return id > 0;
        } catch (NumberFormatException e) {
            errorHandler.addInvalidPathVariable(errors);

            return false;
        }
    }
}
