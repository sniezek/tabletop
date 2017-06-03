package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class ScrabbleConstants {

    public static final String description = "Scrabble is a word game in which two to four players score points by " +
            "placing tiles, each bearing a single letter, onto a gameboard which is divided into a 15×15 grid of " +
            "squares. ";

    public static final String longDescription = "The game is played by two to four players on a square board with " +
            "a 15×15 grid of cells (individually known as \"squares\"), each of which accommodates a single letter tile." +
            " In official club and tournament games, play is between two players or, occasionally, between two teams each " +
            "of which collaborates on a single rack. The board is marked with \"premium\" squares, which multiply the " +
            "number of points awarded: eight dark red \"triple-word\" squares, 17 pale red \"double-word\" squares, of " +
            "which one, the center square (H8), is marked with a star or other symbol; 12 dark blue \"triple-letter\" " +
            "squares, and 24 pale blue \"double-letter\" squares. The game also has two blank tiles that are unmarked " +
            "and carry no point value. The blank tiles can be used as substitutes for any letter; once laid on the board, " +
            "however, the choice is fixed. Different language sets use different letter set distributions with different point values.";

    public static final String imageUrl = "http://old.e-s-g.eu/Images/Spiele/Themen/Scrabble/SCRABBLE%20Buchstaben.gif";
    public static final String bannerUrl = "http://theromantic.com/wp-content/uploads/2015/07/romantic-games-scrabbling-.jpg";
    public static final String time = "50 minutes";
    public static final Integer randomChance = 2;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 8;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        tmpSet.add(GameCategory.WORD_GAME);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
