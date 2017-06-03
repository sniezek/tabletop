package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Ewa on 14.05.2017.
 */
public class MonopolyConstants {
    public static final String description = "Monopoly is a board game that originated in the United States in 1903 as a way to " +
            "demonstrate that an economy which rewards wealth creation is better " +
            "than one in which monopolists work under few constraints";

    public static final String longDescription = "Subtitled \"The Fast-Dealing Property Trading Game\", the game is " +
            "named after the economic concept of monopoly—the domination of " +
            "a market by a single entity. It is now owned and produced by the " +
            "American game and toy company Hasbro. Players move around the game-board buying, trading, " +
            "or selling properties, developing their properties with houses and hotels, and collecting " +
            "rent from their opponents, with the goal being to drive them all into bankruptcy, leaving one" +
            " monopolist in control of the economy. Since the board game was first commercially sold in the " +
            "1930s, it has become a part of popular world culture, having been locally licensed in more than " +
            "103 countries and printed in more than thirty-seven languages.";

    public static final String imageUrl = "http://sad.hasbro.com/db7312c97e69f2aa2a48e9c156bbc05885942775/f4588a3ecaa676e34622199a51636d40.png";

    public static final String bannerUrl = "http://bi.gazeta.pl/im/59/43/12/z19151705IER,Monopoly-Krakow.jpg";
    public static final String time = "1 - 3 hours";
    public static final Integer randomChance = 4;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 8;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        tmpSet.add(GameCategory.ECONOMIC);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
