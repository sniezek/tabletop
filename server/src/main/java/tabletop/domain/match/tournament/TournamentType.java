package tabletop.domain.match.tournament;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum TournamentType {
    SWISS("Swiss", 2, 1024, false,
            "A Swiss-system tournament is a non-eliminating tournament format which features a set number of rounds " +
                    "of competition. Competitors meet one-to-one in each round and are paired using a set of rules " +
                    "designed to ensure that each competitor plays opponents with a similar running score, but not " +
                    "the same opponent more than once. "
    ),

    LADDER("Ladder", 2, 1024, true, "Ladder tournament description..."),

    NEW_TYPE("New type", 2, 10, true,
            "Put description here."
    );

    private final String name;
    private final int minPlayers;
    private final int maxPlayers;
    private final boolean eliminating;
    private final String description;

    TournamentType(String name, int minPlayers, int maxPlayers, boolean eliminating, String description) {
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.eliminating = eliminating;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public int getMinPlayers() {
        return minPlayers;
    }

    public int getMaxPlayers() {
        return maxPlayers;
    }

    public boolean isEliminating() {
        return eliminating;
    }

    public String getDescription() {
        return description;
    }
}
