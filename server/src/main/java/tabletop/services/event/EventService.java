package tabletop.services.event;

import com.google.common.collect.Lists;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.event.Event;
import tabletop.domain.event.QEvent;
import tabletop.domain.game.Game;
import tabletop.domain.user.User;
import tabletop.repositories.event.EventRepository;
import tabletop.services.UserService;
import tabletop.utils.NotNullUtils;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class EventService {
    @Autowired
    private UserService userService;
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getEvents(Double lat, Double lng, Integer radius,
                                 List<String> games,
                                 String type,
                                 Long startDateTimestamp, Long endDateTimestamp) {
        BooleanBuilder predicateBuilder = new BooleanBuilder();

        if (NotNullUtils.isNotNull(games)) {
            BooleanBuilder gamesPredicateBuilder = new BooleanBuilder();

            List<String> gamesLowerCase = games.stream().map(String::toLowerCase).collect(Collectors.toList());
            gamesLowerCase.forEach(gameName -> gamesPredicateBuilder.or(QEvent.event.sparrings.any().gameName.containsIgnoreCase(gameName)));

            List<Game> registeredGames = gamesLowerCase.stream().map(gameName -> Stream.of(Game.values()).filter(game -> game.getName().contains(gameName)).collect(Collectors.toList())).flatMap(Collection::stream).collect(Collectors.toList());
            gamesPredicateBuilder.or(QEvent.event.tournaments.any().game.in(registeredGames));

            predicateBuilder.and(gamesPredicateBuilder);
        }

        if (NotNullUtils.isNotNull(type)) {
            if (type.equals("tournament")) {
                predicateBuilder.and(QEvent.event.tournaments.isNotEmpty());
            } else {
                predicateBuilder.and(QEvent.event.sparrings.isNotEmpty());
            }
        }

        if (NotNullUtils.isNotNull(startDateTimestamp)) {
            Date startDate = new Date(startDateTimestamp);

            predicateBuilder.and(
                    (QEvent.event.sparrings.any().startDate.goe(startDate))
                            .or
                                    (QEvent.event.tournaments.any().startDate.goe(startDate)));
        }
        if (NotNullUtils.isNotNull(endDateTimestamp)) {
            Date endDate = new Date(endDateTimestamp);

            predicateBuilder.and(
                    (QEvent.event.sparrings.any().endDate.loe(endDate))
                            .or
                                    (QEvent.event.tournaments.any().endDate.loe(endDate)));
        }

        List<Event> events = Lists.newArrayList(eventRepository.findAll(predicateBuilder));

        if (NotNullUtils.areAllNotNull(lat, lng, radius)) {
            return events.stream().filter(event -> LocationService.isLocationWithinRadiusFromPoint(event.getLocation(), radius, lat, lng)).collect(Collectors.toList());
        }

        return events;
    }

    public Event createEvent(Event event) {
        event.setOrganiser(userService.getAuthenticatedUser().get());

        return saveEvent(event);
    }

    public Event updateEvent(Long id, Event newEvent) {
        Event oldEvent = getEventById(id).get();

        newEvent.setId(id);
        newEvent.setOrganiser(oldEvent.getOrganiser());

        return saveEvent(newEvent);
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public Optional<Event> getEventById(Long id) {
        return Optional.ofNullable(eventRepository.findOne(id));
    }

    public List<Event> getUserOrganisedGames() {
        User user = userService.getAuthenticatedUser().get();
        Predicate predicate = QEvent.event.organiser.eq(user);

        return Lists.newArrayList(eventRepository.findAll(predicate));
    }
}
