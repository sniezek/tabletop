package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.domain.user.User;
import tabletop.services.UserService;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public ResponseEntity createUser(@Valid @RequestBody User user) {
        Optional<User> alreadyExistingUser = userService.getUserByUsername(user.getUsername());

        return alreadyExistingUser.isPresent() ? ResponseUtils.conflict("User with that name already exists!") : ResponseUtils.created(userService.addUser(user));
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user")
    public ResponseEntity getAuthenticatedUser() {
        return ResponseEntity.ok(userService.getAuthenticatedUser().get());
    }
}
