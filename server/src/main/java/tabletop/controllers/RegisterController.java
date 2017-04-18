package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import tabletop.domain.users.User;
import tabletop.services.UsersService;

import javax.validation.Valid;

@Controller
public class RegisterController {
    private UsersService usersService;

    @Autowired
    public void setUsersService(UsersService usersService) {
        this.usersService = usersService;
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    String registerPage(Model model) {
        model.addAttribute("user", new User());

        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    String doRegister(@ModelAttribute("user") @Valid User user, BindingResult result, Errors errors) {
        boolean correct = true;

        if (usersService.getUserByUsername(user.getUsername()).isPresent()) {
            correct = false;
            errors.reject("username.exists", "Username already exists");
        }
        if (result.hasFieldErrors("username")) {
            correct = false;
            errors.reject("username.invalid", "Username is empty");
        }
        if (result.hasFieldErrors("password")) {
            correct = false;
            errors.reject("password.invalid", "Password is empty");
        }

        if (!correct) {
            return "register";
        }

        usersService.createUser(user);

        return "redirect:/login";
    }
}
