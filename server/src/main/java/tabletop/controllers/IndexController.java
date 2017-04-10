package tabletop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import tabletop.services.EventsService;

/**
 * @author Olaf Sniezek
 */
@Controller
public class IndexController {
    private EventsService eventService;

    @Autowired
    public void setEventsService(EventsService eventService) {
        this.eventService = eventService;
    }

    @RequestMapping("/")
    String index(Model model) {
        model.addAttribute("events", eventService.getEvents());
        return "index";
    }
}
