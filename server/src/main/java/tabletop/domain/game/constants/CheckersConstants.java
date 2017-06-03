package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class CheckersConstants {

    public static final String displayName = "Checkers";

    public static final String description = "Checkers (American English) or draughts (British English) is a group of strategy " +
            "board games for two players which involve diagonal moves of uniform game pieces and mandatory captures by jumping " +
            "over opponent pieces.";

    public static final String longDescription = "Checkers is played by two opponents, on opposite sides of the gameboard. " +
            "One player has the dark pieces; the other has the light pieces. Players alternate turns. A player may not move an opponent's piece. " +
            "A move consists of moving a piece diagonally to an adjacent unoccupied square. If the adjacent square contains an opponent's piece, " +
            "and the square immediately beyond it is vacant, the piece may be captured (and removed from the game) by jumping over it.\n Only the dark " +
            "squares of the checkered board are used. A piece may move only diagonally into an unoccupied square. Capturing is mandatory in most " +
            "official rules, although some rule variations make capturing optional when presented. \nIn almost all variants, the player without " +
            "pieces remaining, or who cannot move due to being blocked, loses the game. It actually has several variations, " +
            "like the international draughts that is played on a 10 by 10 board and several variants that are played on a 12 by 12 board. " +
            "The popular version called American checkers, which is also called English draughts, is played on an 8 by 8 board.\nCheckers " +
            "have been around since 3000 B.C., with a board for the game being found in Ur. The game was mentioned by the likes of Homer and Plato. ";

    public static final String imageUrl = "https://s-media-cache-ak0.pinimg.com/originals/9b/be/52/9bbe52e6923942696e66912c584ad9ad.png";
    public static final String bannerUrl = "https://ttoes.files.wordpress.com/2009/11/checkers.jpg";
    public static final String time = "30 minutes";
    public static final Integer randomChance = 1;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 7;
    public static final Integer difficulty = 3;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
