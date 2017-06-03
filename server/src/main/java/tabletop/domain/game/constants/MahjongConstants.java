package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class MahjongConstants {

    public static final String description = "Mahjong is a tile-based game that originated in China during the Qing dynasty. " +
            "It is commonly played by four players.  It is a game of skill, strategy, and calculation and involves a degree of chance";

    public static final String longDescription = "The game is played with a set of 144 tiles based on Chinese characters and " +
            "symbols, although some regional variations may omit some tiles and/or add unique tiles. In most variations, each " +
            "player begins by receiving 13 tiles. In turn players draw and discard tiles until they complete a legal hand using " +
            "the 14th drawn tile to form 4 groups (meld) and a pair (eye). There are fairly standard rules about how a piece " +
            "is drawn, how a piece is robbed from another player, the use of simples (numbered tiles) and honors (winds and dragons), " +
            "the kinds of melds allowed, how to deal the tiles and the order of play. Despite these similarities, there are many regional " +
            "variations to the rules including rather different scoring systems, criteria for legal winning hands and even private table rules" +
            " which distinguish some variations as notably different styles of mahjong.";

    public static final String imageUrl = "http://www.playjava.com/images/mahjong_ttl.gif";
    public static final String bannerUrl = "http://i.dailymail.co.uk/i/pix/2015/12/06/article-doc-6a59p-cu6rthdRwa5e75a04f6c505aa1b-755_634x422.jpg";
    public static final String time = "20 - 60 minutes";
    public static final Integer randomChance = 4;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 5;
    public static final Integer difficulty = 3;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
