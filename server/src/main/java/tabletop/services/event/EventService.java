package tabletop.services.event;

import com.google.common.collect.Lists;
import com.querydsl.core.BooleanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tabletop.domain.event.Event;
import tabletop.domain.event.QEvent;
import tabletop.domain.game.Game;
import tabletop.domain.match.Match;
import tabletop.domain.user.User;
import tabletop.repositories.event.EventRepository;
import tabletop.services.UserService;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.Objects.nonNull;
import static tabletop.utils.NotNullUtils.areAllNotNull;

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

        if (nonNull(games)) {
            BooleanBuilder gamesPredicateBuilder = new BooleanBuilder();

            List<String> gamesLowerCase = games.stream().map(String::toLowerCase).collect(Collectors.toList());
            gamesLowerCase.forEach(gameName -> gamesPredicateBuilder.or(QEvent.event.sparrings.any().gameName.containsIgnoreCase(gameName)));

            List<Game> registeredGames = gamesLowerCase.stream().map(gameName -> Stream.of(Game.values()).filter(game -> game.getName().toLowerCase().contains(gameName)).collect(Collectors.toList())).flatMap(Collection::stream).collect(Collectors.toList());
            gamesPredicateBuilder.or(QEvent.event.tournaments.any().game.in(registeredGames));

            predicateBuilder.and(gamesPredicateBuilder);
        }

        if (nonNull(type)) {
            if (type.equals("tournament")) {
                predicateBuilder.and(QEvent.event.tournaments.isNotEmpty());
            } else {
                predicateBuilder.and(QEvent.event.sparrings.isNotEmpty());
            }
        }

        if (nonNull(startDateTimestamp)) {
            Date startDate = new Date(startDateTimestamp);

            predicateBuilder.and(
                    (QEvent.event.sparrings.any().startDate.goe(startDate))
                            .or
                                    (QEvent.event.tournaments.any().startDate.goe(startDate)));
        }
        if (nonNull(endDateTimestamp)) {
            Date endDate = new Date(endDateTimestamp);

            predicateBuilder.and(
                    (QEvent.event.sparrings.any().endDate.loe(endDate))
                            .or
                                    (QEvent.event.tournaments.any().endDate.loe(endDate)));
        }

        List<Event> events = Lists.newArrayList(eventRepository.findAll(predicateBuilder));

        if (areAllNotNull(lat, lng, radius)) {
            return events.stream().filter(event -> LocationService.isLocationWithinRadiusFromPoint(event.getLocation(), radius, lat, lng)).collect(Collectors.toList());
        }

        return events;
    }

    public Optional<Event> getEventById(Long id) {
        return Optional.ofNullable(eventRepository.findOne(id));
    }

    public Event createEvent(Event event) {
        User organiser = userService.getAuthenticatedUser().get();

        event.setOrganiser(organiser);
        event.getMatches().forEach(match -> {
            Set<User> matchPlayers = match.getUsers();
            if (matchPlayers.size() > 0) {
                matchPlayers.clear();
                matchPlayers.add(organiser);
            }
        });
        event.getTournaments().forEach(tournament -> {
            tournament.setEvent(event);
        });

        return saveEvent(event);
    }

    public Event updateEvent(Long id, Event newEvent) {
        Event oldEvent = getEventById(id).get();

//        newEvent.setId(id);
//        newEvent.setOrganiser(oldEvent.getOrganiser());
//
//        return saveEvent(newEvent);

        oldEvent.setName(newEvent.getName());
        oldEvent.setDescription(newEvent.getDescription());
        oldEvent.setLocation(newEvent.getLocation());

        return saveEvent(oldEvent);
    }

    public boolean applyForMatch(Event event, Match match) {
        User user = userService.getAuthenticatedUser().get();

        if (match.getDiscarded().contains(user) || match.getPending().contains(user)) {
            return false;
        }

        for (Match match2 : event.getMatches()) {
            if (!match.equals(match2) && match.getUsers().contains(user) && match2.getUsers().contains(user) && match2.getEndDate().after(match.getStartDate()) && match2.getStartDate().before(match.getEndDate())) {
                return false;
            }
        }

        match.getPending().add(user);
        eventRepository.save(event);

        return true;
    }

    public boolean removeFromMatch(Event event, Match match) {
        User user = userService.getAuthenticatedUser().get();

        if (match.getPending().contains(user)) {
            removeFromMatch(match.getPending(), event, user);

            return true;
        }

        if (match.getUsers().contains(user)) {
            removeFromMatch(match.getUsers(), event, user);

            return true;
        }

        return false;
    }

    private void removeFromMatch(Set<User> setToRemoveUserFrom, Event event, User user) {
        setToRemoveUserFrom.remove(user);
        eventRepository.save(event);
    }

    public boolean acceptForMatch(Event event, Match match, User user) {
        if (match.getPending().contains(user)) {
            acceptForMatch(match.getPending(), event, match, user);

            return true;
        }

        if (match.getDiscarded().contains(user)) {
            acceptForMatch(match.getDiscarded(), event, match, user);

            return true;
        }

        return false;
    }

    private void acceptForMatch(Set<User> setToRemoveUserFrom, Event event, Match match, User user) {
        setToRemoveUserFrom.remove(user);
        match.getUsers().add(user);

        eventRepository.save(event);
    }

    public boolean discardFromMatch(Event event, Match match, User user) {
        if (match.getPending().contains(user)) {
            removeFromMatch(match.getPending(), event, user);

            return true;
        }

        if (match.getUsers().contains(user)) {
            removeFromMatch(match.getUsers(), event, user);

            return true;
        }

        return false;
    }

    private Event saveEvent(Event event) {
        return eventRepository.save(event);
    }
}
