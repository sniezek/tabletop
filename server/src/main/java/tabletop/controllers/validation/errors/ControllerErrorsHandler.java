package tabletop.controllers.validation.errors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Component;
import tabletop.configuration.validation.messages.ValidationMessages;

@Component
public class ControllerErrorsHandler {
    @Autowired
    private ValidationMessages messages;

    public void addError(ControllerErrors errors, String errorCode) {
        errors.add(messages.getMessage(errorCode));
    }

    public void addIncorrectRequestError(ControllerErrors errors) {
        errors.add(messages.getMessage("request.incorrect"));
    }

    public void addInvalidPathVariableError(ControllerErrors errors) {
        errors.add(messages.getMessage("request.invalid_path_variable"));
    }

    public void accessDenied() {
        throw new AccessDeniedException(messages.getMessage("access_denied"));
    }

    public String getErrorMessage(String errorCode) {
        return messages.getMessage(errorCode);
    }
}
