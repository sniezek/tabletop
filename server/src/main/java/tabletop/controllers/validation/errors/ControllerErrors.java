package tabletop.controllers.validation.errors;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.validation.BindingResult;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class ControllerErrors {
    private Set<String> errorMessages;

    public ControllerErrors() {
        this.errorMessages = new HashSet<>();
    }

    public ControllerErrors(BindingResult bindingResult) {
        this();
        addBindingResultErrorMessages(bindingResult);
    }

    public void addBindingResultErrorMessages(BindingResult bindingResult) {
        errorMessages.addAll(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage).collect(Collectors.toSet()));
    }

    public void add(String errorMessage) {
        errorMessages.add(errorMessage);
    }

    public boolean areErrors() {
        return !errorMessages.isEmpty();
    }

    public boolean noErrors() {
        return errorMessages.isEmpty();
    }

    public Set<String> getErrors() {
        return errorMessages;
    }
}
