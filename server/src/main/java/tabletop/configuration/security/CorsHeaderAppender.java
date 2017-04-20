package tabletop.configuration.security;

import tabletop.configuration.web.WebConfiguration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

class CorsHeaderAppender {
    static void append(HttpServletRequest request, HttpServletResponse response) {
        if (WebConfiguration.CLIENT_ADDRESS.equals(request.getHeader("Origin"))) {
            response.addHeader("Access-Control-Allow-Origin", WebConfiguration.CLIENT_ADDRESS);
        }
    }
}
