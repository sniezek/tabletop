package tabletop.configuration.validation.messages;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ValidationMessagesConfiguration {
    @Bean
    public ValidationMessages messageSource() {
        ValidationMessages source = new ValidationMessages();
        source.setBasename("ValidationMessages");

        return source;
    }
}
