package tabletop.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertiesConfiguration {
    @Value("${client.url}")
    public String CLIENT_URL;
}
