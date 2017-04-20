/**
 * Copyright (C) 2017 Sabre Polska, All rights reserved.
 * <p>
 * This software is the confidential and proprietary product of Sabre Polska.
 * Any unauthorized use, reproduction, or transfer of this software is
 * strictly prohibited.
 * <p>
 * creation date: Apr 20, 2017
 */
package tabletop.configuration.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class RestAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
