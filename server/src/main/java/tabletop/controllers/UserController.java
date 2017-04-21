package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tabletop.domain.user.User;
import tabletop.services.UserService;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public ResponseEntity createUser(@Valid @RequestBody User user) {
        return userService.getUserByUsername(user.getUsername()).isPresent() ? new ResponseEntity<>(HttpStatus.CONFLICT) : ResponseEntity.ok(userService.createUser(user));
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user")
    public ResponseEntity getAuthenticatedUser(Principal principal) {
        Optional<User> user = userService.getUserFromPrincipal(principal);

        return user.isPresent() ? ResponseEntity.ok(user.get()) : new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
