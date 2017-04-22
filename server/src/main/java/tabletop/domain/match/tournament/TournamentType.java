package tabletop.domain.match.tournament;

public enum TournamentType {
    SWISS("Swiss", 2, 1024);

    private final String name;
    private final int minPlayers;
    private final int maxPlayers;

    TournamentType(String name, int minPlayers, int maxPlayers) {
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
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
}
