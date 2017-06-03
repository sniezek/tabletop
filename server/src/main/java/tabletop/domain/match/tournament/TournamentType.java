package tabletop.domain.match.tournament;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum TournamentType {
    SWISS("Swiss", 2, 1024, false,
            "url(http://lenews.ch/wp-content/uploads/2016/04/Swiss-handshake.jpg) center / cover",
            "A Swiss-system tournament is a non-eliminating tournament format which features a set number of rounds " +
                    "of competition. Competitors meet one-to-one in each round and are paired using a set of rules " +
                    "designed to ensure that each competitor plays opponents with a similar running score, but not " +
                    "the same opponent more than once. "
    ),
    LADDER("Ladder", 2, 1024, true,
            "url(https://www.incimages.com/uploaded_files/image/1940x900/climbing-ladder-1940x900_34483.jpg) center / cover",
            "A ladder tournament is a form of tournament which has an element of elimination. Players are listed " +
                    "as if on the rungs of a ladder. The objective for a player is to reach the highest rung of the " +
                    "ladder. The competition proceeds via a system of challenges. Any player can challenge a player " +
                    "above him or her on the ladder. If the lower-placed player wins the match, then the two players " +
                    "swap places on the ladder. ");


    private final String id;
    private final String name;
    private final int minPlayers;
    private final int maxPlayers;
    private final boolean eliminating;
    private final String pictureUrl;
    private final String description;

    TournamentType(String name, int minPlayers, int maxPlayers, boolean eliminating, String pictureUrl, String description) {
        this.id = this.name();
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.eliminating = eliminating;
        this.pictureUrl = pictureUrl;
        this.description = description;
    }

    public String getId() {
        return id;
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

    public String getPictureUrl() {
        return pictureUrl;
    }

    public String getDescription() {
        return description;
    }
}
