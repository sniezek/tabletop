package tabletop.configuration.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import tabletop.domain.user.User;
import tabletop.services.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Component
class RestAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(RestAuthenticationSuccessHandler.class);

    @Autowired
    private UserService userService;

    @Autowired
    private ObjectMapper jacksonObjectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        clearAuthenticationAttributes(request);

        response.setStatus(HttpServletResponse.SC_OK);

        Optional<User> user = userService.getUserByUsername(((org.springframework.security.core.userdetails.User) authentication.getPrincipal()).getUsername());
        user.ifPresent(u -> {
            try {
                response.getWriter().print(jacksonObjectMapper.writeValueAsString(user.get()));
            } catch (IOException e) {
                LOGGER.error(e.getMessage(), e);
            }
        });
    }
}
