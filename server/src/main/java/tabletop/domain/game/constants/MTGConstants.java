package tabletop.domain.game.constants;

import tabletop.domain.game.GameCategory;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class MTGConstants {

    public static final String displayName = "Magic: the Gathering";

    public static final String description = "Magic: the Gathering is a tradable card game where you build your collection of " +
            "cards by trading with your friends, assembling decks of cards, and battling against an opponent and their deck.";

    public static final String longDescription = "Magic: the Gathering can be played by two or more players in various formats, the most common " +
            "of which uses a deck of 60+ cards, containing no more than 4 of a single card with the exception of basic land cards, " +
            "either in person with printed cards or using a deck of virtual cards through the Internet-based Magic: The Gathering Online, " +
            "on a smartphone or tablet, or other programs.\nEach game represents a battle between wizards known as \"planeswalkers\", who employ " +
            "spells, artifacts, and creatures depicted on individual Magic cards to defeat their opponents. Although the original concept " +
            "of the game drew heavily from the motifs of traditional fantasy role-playing games such as Dungeons & Dragons, the gameplay " +
            "of Magic bears little similarity to pencil-and-paper adventure games, while having substantially more cards and more complex " +
            "rules than many other card games.\nNew cards are released on a regular basis through expansion sets. An organized tournament " +
            "system played at an international level and a worldwide community of professional Magic players has developed, as well as a " +
            "substantial secondary market for Magic cards. Certain Magic cards can be valuable due to their rarity and utility in game play, " +
            "with prices ranging from a few cents to thousands of dollars.";

    public static final String imageUrl = "https://www.enlighteningmindsgaming.com/wp-content/uploads/2017/02/magic-logo-min.png";
    public static final String bannerUrl = "http://guttulus.com/wp-content/uploads/2016/09/3059639-poster-1280-magic-the-gathering-lessons.jpg";
    public static final String time = "30 minutes";
    public static final Integer randomChance = 3;
    public static final Set<GameCategory> gameCategories;
    public static final Integer minAge = 13;
    public static final Integer difficulty = 4;

    static {
        Set<GameCategory> tmpSet = new HashSet<>();
        tmpSet.add(GameCategory.STRATEGY);
        tmpSet.add(GameCategory.CARD_GAME);
        tmpSet.add(GameCategory.FANTASY);
        gameCategories = Collections.unmodifiableSet(tmpSet);
    }
}
