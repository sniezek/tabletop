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
public class LadderTournamentService extends GeneralTournamentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SwissTournamentService.class);

    @Override
    public List<Pair<User>> getNextPair(SwissTournamentProcess swissTournamentProcess) {
        List<SwissPlayerResult> results = swissTournamentProcess.getPlayerResults().stream()
                .filter(result -> result.getCurrentScore() == 1)
                .collect(Collectors.toList());

        List<Pair<User>> pairs = new LinkedList<>();

        for (int i = 0; i < results.size(); i += 2) {
            SwissPlayerResult reshost = results.get(i);
            SwissPlayerResult resopponent = results.get(i + 1);
            Pair<User> pair = new Pair<User>(reshost.getId().getUser(), resopponent.getId().getUser(), reshost.getResult(), resopponent.getResult());
            setInitialResult(reshost.getId().getUser(), resopponent);
            setInitialResult(resopponent.getId().getUser(), reshost);
            if (!reshost.isAvailable() && resopponent.isAvailable()) {
                setWinner(swissTournamentProcess, resopponent.getId().getUser());
            } else if (reshost.isAvailable() && !resopponent.isAvailable()) {
                setWinner(swissTournamentProcess, reshost.getId().getUser());
            } else {
                pairs.add(pair);
            }
        }

        return pairs;

    }

    @Override
    public List<Pair<User>> getCurentState(SwissTournamentProcess swissTournamentProcess) {
        List<Pair<User>> state = new ArrayList<>();
        Set<User> hosts = new HashSet<>();
        Optional<SwissPlayerResult> resultFromLastRound =
                swissTournamentProcess.getPlayerResults()
                        .stream()
                        .max(Comparator.comparingInt(result -> result.getUsersPlayed().size()));
        if(!resultFromLastRound.isPresent()){
            return state;
        }

        swissTournamentProcess.getPlayerResults().stream()
                .filter(swissPlayerResult -> resultFromLastRound.get().getUsersPlayed().size() == swissPlayerResult.getUsersPlayed().size())
                .forEach(result -> {
                    Optional<SwissPlayerResult> opponentResult = swissTournamentProcess.getResultByUser(result.getCurrentOpponent());
                    if (isPairToAdd(hosts, result, opponentResult)) {
                        state.add(getResultPair(result, opponentResult));
                        hosts.add(result.getId().getUser());
                    }
                });
        return state;
    }

    public boolean canBeFinished(SwissTournamentProcess swissTournamentProcess) {
        return true; //TODO
    }
}
