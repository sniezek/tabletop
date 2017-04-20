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

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public ResponseEntity createUser(@Valid @RequestBody User user) {
        return userService.getUserByUsername(user.getUsername()).isPresent() ? new ResponseEntity<>(HttpStatus.CONFLICT) : ResponseEntity.ok(userService.createUser(user));
    }
}
