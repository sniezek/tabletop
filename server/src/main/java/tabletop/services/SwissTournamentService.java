package tabletop.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import tabletop.domain.match.tournament.Pair;
import tabletop.domain.match.tournament.swiss.SwissPlayerResult;
import tabletop.domain.match.tournament.swiss.SwissTournamentProcess;
import tabletop.domain.user.User;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class SwissTournamentService extends GeneralTournamentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SwissTournamentService.class);

    @Override
    public List<Pair<User>> getNextPair(SwissTournamentProcess swissTournamentProcess) {

        shuffleUsers(swissTournamentProcess.getUsers());
        List<SwissPlayerResult> resultsOrdered = swissTournamentProcess.getPlayerResults().stream()
                .sorted(Comparator.comparingInt(SwissPlayerResult::getResult))
                .collect(Collectors.toList());


        List<Pair<User>> pairs = new LinkedList<>();

        LOGGER.info("Players sorted: " + resultsOrdered.toString());

        while (resultsOrdered.size() > 0) {
            SwissPlayerResult resultHost = resultsOrdered.remove(0);
            for (SwissPlayerResult resultGuest : resultsOrdered) {
                if (!resultGuest.getUsersPlayed().contains(resultHost.getId().getUser())) {
                    Pair<User> pair = new Pair<>(
                            resultHost.getId().getUser(),
                            resultGuest.getId().getUser(),
                            resultHost.getResult(),
                            resultGuest.getResult());
                    resultsOrdered.remove(resultGuest);
                    setInitialResult(resultGuest.getId().getUser(), resultHost);
                    setInitialResult(resultHost.getId().getUser(), resultGuest);
                    if (!resultHost.isAvailable() && resultGuest.isAvailable()) {
                        setWinner(swissTournamentProcess, resultGuest.getId().getUser());
                    } else if (resultHost.isAvailable() && !resultGuest.isAvailable()) {
                        setWinner(swissTournamentProcess, resultHost.getId().getUser());
                    } else {
                        pairs.add(pair);
                    }
                    break;
                }
            }
        }

        return pairs;
    }

    @Override
    public List<Pair<User>> getCurentState(SwissTournamentProcess swissTournamentProcess) {
        List<Pair<User>> state = new ArrayList<>();
        Set<User> hosts = new HashSet<>();
        swissTournamentProcess.getPlayerResults().forEach(result -> {
            Optional<SwissPlayerResult> opponentResult = swissTournamentProcess.getResultByUser(result.getCurrentOpponent());
            if (isPairToAdd(hosts, result, opponentResult)) {
                state.add(getResultPair(result, opponentResult));
                hosts.add(result.getId().getUser());
            }
        });
        return state;
    }

    public boolean canBeFinished(SwissTournamentProcess swissTournamentProcess) {
        return swissTournamentProcess.getRounds() <= swissTournamentProcess.getPlayerResults().get(0).getUsersPlayed().size();
    }
}
