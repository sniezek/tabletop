package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import tabletop.controllers.utils.ControllerErrorHandler;
import tabletop.controllers.utils.ResponseUtils;
import tabletop.domain.user.User;
import tabletop.services.UserService;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ControllerErrorHandler handler;

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        Optional<User> alreadyExistingUser = userService.getUserByUsername(user.getUsername());

        return alreadyExistingUser.isPresent() ? ResponseUtils.conflict(handler.getErrorMessage("user.already_exists")) : ResponseUtils.created(userService.addUser(user));
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user")
    public ResponseEntity<User> getAuthenticatedUser() {
        return ResponseEntity.ok(userService.getAuthenticatedUser().get());
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/user/editmail")
    public ResponseEntity<?> editMail(@Valid @RequestBody User user, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }
        return ResponseUtils.created(userService.editMail(user));
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/user/editpassword")
    public ResponseEntity<?> editPassword(@Valid @RequestBody User user, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseUtils.badRequest(errors);
        }

        return ResponseUtils.created(userService.editPassword(user));
    }

}
