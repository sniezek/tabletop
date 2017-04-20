package tabletop.configuration.security;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

class CorsJsonUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(CorsJsonUsernamePasswordAuthenticationFilter.class);

    private final AuthenticationSuccessHandler successHandler;
    private final AuthenticationFailureHandler failureHandler;

    CorsJsonUsernamePasswordAuthenticationFilter(String defaultProcessUrl, AuthenticationSuccessHandler successHandler, AuthenticationFailureHandler failureHandler) {
        this.successHandler = successHandler;
        this.failureHandler = failureHandler;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        if (!request.getMethod().equals("POST")) {
            throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
        }

        CorsHeaderAppender.append(request, response);

        JsonObject usernamePasswordJson = parseJson(request);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(getJsonParameterValueAsString(usernamePasswordJson, "username"), getJsonParameterValueAsString(usernamePasswordJson, "password"));

        return this.getAuthenticationManager().authenticate(token);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        successHandler.onAuthenticationSuccess(request, response, authResult);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                              AuthenticationException failed) throws IOException, ServletException {
        failureHandler.onAuthenticationFailure(request, response, failed);
    }

    private static JsonObject parseJson(HttpServletRequest request) {
        try {
            return new JsonParser().parse(request.getReader()).getAsJsonObject();
        } catch (IOException | IllegalStateException e) {
            LOGGER.error(e.getMessage(), e);

            return null;
        }
    }

    private static String getJsonParameterValueAsString(JsonObject object, String parameter) {
        if (object == null) {
            return null;
        }

        JsonElement element = object.get(parameter);

        return element != null ? element.getAsString() : null;
    }
}
