package tabletop.controllers.validation.errors;

import org.springframework.beans.factory.annotation.Autowired;
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

    public String getErrorMessage(String errorCode) {
        return messages.getMessage(errorCode);
    }
}
