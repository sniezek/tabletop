package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class ChessConstants {

    public static final String description = "Two-player strategy board game played on a chessboard, a checkered " +
            "gameboard with 64 squares arranged in an " +
            "8×8 grid.";

    public static final String longDescription = "Chess is a two-player strategy board game played on a chessboard, " +
            "a checkered gameboard with 64 squares arranged " +
            "in an 8×8 grid. The game is played by millions of people worldwide.\n" +
            "Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. " +
            "Each of the six piece types moves differently, with the most powerful being the queen and the least " +
            "powerful the pawn. The objective is to checkmate the opponent's king by placing it under an " +
            "inescapable threat of capture. To this end, a player's pieces are used to attack and capture the opponent's " +
            "pieces, while supporting each other. In addition to checkmate, the game can be won by voluntary resignation " +
            "of the opponent, which typically occurs when too much material is lost, or checkmate appears unavoidable. " +
            "A game can also in several ways end in a draw.";

    public static final String imageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg";
    public static final String bannerUrl = "https://cdn.theatlantic.com/assets/media/img/mt/2016/02/shutterstock_110240555/lead_960.jpg?1455134071";
    public static final String time = "10 - 60 minutes";
    public static final Integer randomChance = 1;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 12;
    public static final Integer difficulty = 5;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
