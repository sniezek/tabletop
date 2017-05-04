package tabletop.controllers.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import tabletop.configuration.validation.messages.ValidationMessages;

@Component
public class ControllerErrorHandler {
    @Autowired
    private ValidationMessages messages;

    public void addError(Errors errors, String errorCode) {
        errors.reject(errorCode, messages.getMessage(errorCode));
    }

    public void addIncorrectRequestError(Errors errors) {
        String requestIncorrect = "request.incorrect";
        errors.reject(requestIncorrect, messages.getMessage(requestIncorrect));
    }

    public String getErrorMessage(String errorCode) {
        return messages.getMessage(errorCode);
    }
}
