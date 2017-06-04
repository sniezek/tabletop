package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class TalismanConstants {

    public static final String displayName = "Talisman";

    public static final String description = "Talisman is a fantasy-themed adventure board game for two to six players, originally designed and " +
            "produced by Games Workshop and now published by Fantasy Flight Games";

    public static final String longDescription = "The object of the game is to progress through a series of regions and reach the Crown" +
            " of Command. The game contains three regions: the Outer Region, the Middle Region and the Inner Region. Players start in " +
            "the Outer Region and try to progress inward. The Inner Region contains the Crown of Command, the central board position. " +
            "To reach the Crown of Command, players must pass through the Valley of Fire. Only characters possessing a talisman may " +
            "enter the Valley of Fire, hence the name of the game.\nEach player selects a character, or \"hero\", at random at the " +
            "beginning of the game. Each character has different special abilities and a set location in which to begin. Each " +
            "character has several attributes: Life, Gold, Strength and Craft. Each character begins with four lives and one bag " +
            "of gold. Strength and Craft are used for two different kinds of combat: physical combat and psychic combat. One of the" +
            " main goals of the game is to build up a character so it is strong enough to venture inward, eventually to the Crown of " +
            "Command. Once at the Crown, a character can cast the Command Spell causing opponents to lose one life each time it is " +
            "successfully cast.\nGame play consists of players rolling a die and moving about the regions. At each " +
            "location in the regions, the board indicates what takes place. Some locations have set events or encounters, " +
            "some are random. Many locations indicate to draw a number of Adventure cards. These cards contain numerous events. " +
            "Some indicate the character has met an enemy who must be fought, some indicate that the character has found an object " +
            "or magic object or received a bag of gold, etc. All these events help build up the character. One of the features of the " +
            "game is that many of the cards remain on the square after being drawn.\nBuilding up the character is one of the " +
            "game's main activities. This can involve gaining followers, increasing in Strength and Craft, gaining and casting spells, " +
            "gaining lives, obtaining gold and acquiring objects and magic objects. One magic object a character must eventually possess " +
            "is a talisman, which allows the character to pass through the Valley of Fire.";

    public static final String imageUrl = "https://1.bp.blogspot.com/-kG9lq8ULwIQ/VkmeS_KtdAI/AAAAAAAAAqE/tF3H3Av2cA8/s1600/layout-talisman-the-dragon.png";
    public static final String bannerUrl = "http://1.bp.blogspot.com/-o8nAUKHrmAA/T3JotYZ_BxI/AAAAAAAAAcA/7oqS76cYM18/s1600/TotalCon-029-1024x682.jpg";
    public static final String time = "4 - 5 hours";
    public static final Integer randomChance = 3;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 12;
    public static final Integer difficulty = 4;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        tmpSet.add(GameCategory.FANTASY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }

}
