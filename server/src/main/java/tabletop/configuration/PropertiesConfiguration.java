package tabletop.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertiesConfiguration {
    @Value("${client.url}")
    private String clientUrl;

    public String getClientUrl() {
        return clientUrl;
    }
}
