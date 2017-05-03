package tabletop.configuration.validation.messages;

import org.springframework.context.support.ResourceBundleMessageSource;

public class ValidationMessages extends ResourceBundleMessageSource {
    public String getMessage(String code) {
        return getMessage(code, null, null);
    }
}
