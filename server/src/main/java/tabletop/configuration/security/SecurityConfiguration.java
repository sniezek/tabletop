package tabletop.configuration.security;

import com.allanditzel.springframework.security.web.csrf.CsrfTokenResponseHeaderBindingFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthenticationSuccessHandler successHandler;
    @Autowired
    private AuthenticationFailureHandler failureHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000");
            }
        };
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider());
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeRequests().antMatchers("/restricted").authenticated()
                .and()
                .headers().frameOptions().disable() // to make H2 work
                .and()
                .csrf().disable() // to make H2 and Postman work
                .addFilterBefore(jsonUsernamePasswordAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .formLogin()
                .loginPage("/form-login")
                .successHandler(new RestAuthenticationSuccessHandler())
                .failureHandler(new RestAuthenticationFailureHandler())
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_OK))
                .and()
                .exceptionHandling()
                .authenticationEntryPoint((request, response, authException) -> response.setStatus(HttpServletResponse.SC_UNAUTHORIZED))
                .accessDeniedHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_FORBIDDEN))
                .and()
                .addFilterAfter(new CsrfTokenResponseHeaderBindingFilter(), CsrfFilter.class);

    }

    private DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    private JsonUsernamePasswordAuthenticationFilter jsonUsernamePasswordAuthenticationFilter() {
        JsonUsernamePasswordAuthenticationFilter filter = new JsonUsernamePasswordAuthenticationFilter("/login", successHandler, failureHandler);
        filter.setAuthenticationManager(this.authenticationManager);

        return filter;
    }
}
