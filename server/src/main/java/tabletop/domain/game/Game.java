package tabletop.domain.game;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.common.collect.Sets;
import tabletop.domain.game.constants.*;
import tabletop.domain.game.wininformation.BasicWinInformation;
import tabletop.domain.game.wininformation.ChessWinInformation;
import tabletop.domain.game.wininformation.WinInformation;
import tabletop.domain.match.tournament.TournamentType;

import java.util.Set;

import static tabletop.domain.match.tournament.TournamentType.SWISS;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Game {

    CHESS("Chess",
            2,
            2,
            ChessConstants.description,
            ChessConstants.longDescription,
            ChessConstants.imageUrl,
            ChessConstants.bannerUrl,
            ChessWinInformation.class,
            SWISS),
    MONOPOLY("Monopoly",
            2,
            10,
            MonopolyConstants.description,
            MonopolyConstants.longDescription,
            MonopolyConstants.imageUrl,
            MonopolyConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    SCRABBLE("Scrabble",
            2,
            4,
            ScrabbleConstants.description,
            ScrabbleConstants.longDescription,
            ScrabbleConstants.imageUrl,
            ScrabbleConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    MAGIC_THE_GATHERING("Magic: The Gathering",
            2,
            -1,
            MTGConstants.description,
            MTGConstants.longDescription,
            MTGConstants.imageUrl,
            MTGConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    CHECKERS("Checkers",
            2,
            2,
            CheckersConstants.description,
            CheckersConstants.longDescription,
            CheckersConstants.imageUrl,
            CheckersConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    TALISMAN("Talisman",
            2,
            6,
            TalismanConstants.description,
            TalismanConstants.longDescription,
            TalismanConstants.imageUrl,
            TalismanConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    GO("Go",
            2,
            2,
            GoConstants.description,
            GoConstants.longDescription,
            GoConstants.imageUrl,
            GoConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    MAHJONG("Mahjong",
            4,
            4,
            MahjongConstants.description,
            MahjongConstants.longDescription,
            MahjongConstants.imageUrl,
            MahjongConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    RISK("Risk",
            2,
            6,
            RiskConstants.description,
            RiskConstants.longDescription,
            RiskConstants.imageUrl,
            RiskConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS),
    BATTLESHIP("Battleship",
            2,
            2,
            BattleshipConstants.description,
            BattleshipConstants.longDescription,
            BattleshipConstants.imageUrl,
            BattleshipConstants.bannerUrl,
            BasicWinInformation.class,
            SWISS);

    private final String name;
    private final int minPlayers;
    private final int maxPlayers;
    private final String description;
    private final String longDescription;
    private final String imageUrl;
    private final String bannerUrl;
    private final Class<? extends WinInformation> winInformation;
    private final Set<TournamentType> allowedTournamentTypes;

    Game(String name, int minPlayers, int maxPlayers, String description, String longDescription,
         String imageUrl, String bannerUrl, Class<? extends WinInformation> winInformation,
         TournamentType... allowedTournamentTypes) {
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.description = description;
        this.longDescription = longDescription;
        this.imageUrl = imageUrl;
        this.bannerUrl = bannerUrl;
        this.winInformation = winInformation;
        this.allowedTournamentTypes = Sets.newHashSet(allowedTournamentTypes);
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

    public String getDescription() {
        return description;
    }

    public String getLongDescription() { return longDescription; }

    public String getImageUrl() { return imageUrl; }

    public String getBannerUrl() { return bannerUrl; }

    public Class<? extends WinInformation> getWinInformation() {
        return winInformation;
    }

    public Set<TournamentType> getAllowedTournamentTypes() {
        return allowedTournamentTypes;
    }
}
