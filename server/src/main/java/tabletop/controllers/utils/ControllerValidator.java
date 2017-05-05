package tabletop.controllers.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Validator;

public abstract class ControllerValidator {
    @Autowired
    protected Validator validator;
    @Autowired
    protected ControllerErrorHandler errorHandler;
}
