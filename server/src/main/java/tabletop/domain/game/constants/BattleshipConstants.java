package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class BattleshipConstants {

    public static final String displayName = "Battleship";

    public static final String description = "Battleship is a guessing game for two players. It is played on ruled grids" +
            " (paper or board) on which the players' fleets of ships (including battleships) are marked. The locations " +
            "of the fleet are concealed from the other player. Players alternate turns calling \"shots\" at the other " +
            "player's ships, and the objective of the game is to destroy the opposing player's fleet.";

    public static final String longDescription = "The game is played on four grids, two for each player. The grids are " +
            "typically square – usually 10×10 – and the individual squares in the grid are identified by letter and " +
            "number. On one grid the player arranges ships and records the shots by the opponent. On the other grid " +
            "the player records their own shots.\nBefore play begins, each player secretly arranges their ships on " +
            "their primary grid. Each ship occupies a number of consecutive squares on the grid, arranged either " +
            "horizontally or vertically. The number of squares for each ship is determined by the type of the ship. " +
            "The ships cannot overlap (i.e., only one ship can occupy any given square in the grid). The types and " +
            "numbers of ships allowed are the same for each player. These may vary depending on the rules. " +
            "After the ships have been positioned, the game proceeds in a series of rounds. In each round, " +
            "each player takes a turn to announce a target square in the opponent's grid which is to be shot at. " +
            "The opponent announces whether or not the square is occupied by a ship, and if it is a \"miss\", the " +
            "player marks their primary grid with a white peg; if a \"hit\" they mark this on their own primary grid " +
            "with a red peg. The attacking player notes the hit or miss on their own \"tracking\" grid with the " +
            "appropriate color peg (red for \"hit\", white for \"miss\"), in order to build up a picture of the " +
            "opponent's fleet.\nWhen all of the squares of a ship have been hit, the ship is sunk, and the ship's " +
            "owner announces this (e.g. \"You sank my battleship!\"). If all of a player's ships have been sunk, " +
            "the game is over and their opponent wins.";

    public static final String imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Battleship_game_board.svg/300px-Battleship_game_board.svg.png";
    public static final String bannerUrl = "https://aos.iacpublishinglabs.com/question/aq/1400px-788px/pieces-game-battleship_e45bf936940bf5e7.jpg?domain=cx.aos.ask.com";
    public static final String time = "20 minutes";
    public static final Integer randomChance = 3;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 7;
    public static final Integer difficulty = 1;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
