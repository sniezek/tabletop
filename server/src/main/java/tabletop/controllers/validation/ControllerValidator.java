package tabletop.controllers.validation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Validator;
import tabletop.controllers.validation.errors.ControllerErrorsHandler;

public abstract class ControllerValidator {
    @Autowired
    protected Validator validator;
    @Autowired
    protected ControllerErrorsHandler errorHandler;
}
