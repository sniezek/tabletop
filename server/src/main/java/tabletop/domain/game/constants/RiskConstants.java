package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class RiskConstants {

    public static final String description = "Risk requires a lot of tactics, strategies and negotiation skills. " +
            "The aim is to occupy as many territories as possible through dice rolls. Whoever has world domination " +
            "at the end wins the game.";

    public static final String longDescription = "Risk is a strategy board game of diplomacy, conflict and conquest " +
            "for two to six players. The standard version is played on a board depicting a political map of the earth, " +
            "divided into forty-two territories, which are grouped into six continents. Turn rotates among players who " +
            "control armies of playing pieces with which they attempt to capture territories from other players, " +
            "with results determined by dice rolls. Players may form and dissolve alliances during the course of the " +
            "game. The goal of the game is to occupy every territory on the board and in doing so, eliminate the other " +
            "players. The game can be lengthy, requiring several hours to multiple days to finish. European versions " +
            "are structured so that each player has a limited \"secret mission\" objective that shortens the game.";

    public static final String imageUrl = "http://sad.hasbro.com/db7312c97e69f2aa2a48e9c156bbc05885942775/a576c6ac51983c80d9e5776efac418e4.png";
    public static final String bannerUrl = "http://static2.businessinsider.com/image/51e6e68e69beddbf39000032/how-to-use-math-to-crush-your-friends-at-risk-like-youve-never-done-before.jpg";
    public static final String time = "1 - 8 hours";
    public static final Integer randomChance = 3;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 10;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
