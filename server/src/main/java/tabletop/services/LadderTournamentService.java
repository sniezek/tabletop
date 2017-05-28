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

    public List<Pair<User>> getNextPair(SwissTournamentProcess swissTournamentProcess) {
        List<SwissPlayerResult> results = swissTournamentProcess.getPlayerResults().stream()
                .filter(result -> result.getCurrentScore() == 1)
                .collect(Collectors.toList());

        LOGGER.info(results.size() + " " + results.get(0) + " " + results.get(1));

        List<Pair<User>> pairs = new LinkedList<>();

        for (int i = 0; i < results.size()/2; i++) {
            SwissPlayerResult reshost = results.get(i);
            SwissPlayerResult resopponent = results.get(i+1);
            Pair<User> pair = new Pair<User>(reshost.getId().getUser(), resopponent.getId().getUser());
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

    public boolean canBeFinished(SwissTournamentProcess swissTournamentProcess) {
        return true; //TODO
    }




    }
