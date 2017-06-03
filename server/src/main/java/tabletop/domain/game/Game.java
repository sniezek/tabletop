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
            ChessConstants.time,
            ChessConstants.randomChance,
            ChessConstants.minAge,
            ChessConstants.gameCategories,
            ChessWinInformation.class,
            SWISS),
    MONOPOLY("Monopoly",
            2,
            6,
            MonopolyConstants.description,
            MonopolyConstants.longDescription,
            MonopolyConstants.imageUrl,
            MonopolyConstants.bannerUrl,
            MonopolyConstants.time,
            MonopolyConstants.randomChance,
            MonopolyConstants.minAge,
            MonopolyConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    SCRABBLE("Scrabble",
            2,
            4,
            ScrabbleConstants.description,
            ScrabbleConstants.longDescription,
            ScrabbleConstants.imageUrl,
            ScrabbleConstants.bannerUrl,
            ScrabbleConstants.time,
            ScrabbleConstants.randomChance,
            ScrabbleConstants.minAge,
            ScrabbleConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    MAGIC("Magic",
            2,
            -1,
            MTGConstants.description,
            MTGConstants.longDescription,
            MTGConstants.imageUrl,
            MTGConstants.bannerUrl,
            MTGConstants.time,
            MTGConstants.randomChance,
            MTGConstants.minAge,
            MTGConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    CHECKERS("Checkers",
            2,
            2,
            CheckersConstants.description,
            CheckersConstants.longDescription,
            CheckersConstants.imageUrl,
            CheckersConstants.bannerUrl,
            CheckersConstants.time,
            CheckersConstants.randomChance,
            CheckersConstants.minAge,
            CheckersConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    TALISMAN("Talisman",
            2,
            6,
            TalismanConstants.description,
            TalismanConstants.longDescription,
            TalismanConstants.imageUrl,
            TalismanConstants.bannerUrl,
            TalismanConstants.time,
            TalismanConstants.randomChance,
            TalismanConstants.minAge,
            TalismanConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    GO("Go",
            2,
            2,
            GoConstants.description,
            GoConstants.longDescription,
            GoConstants.imageUrl,
            GoConstants.bannerUrl,
            GoConstants.time,
            GoConstants.randomChance,
            GoConstants.minAge,
            GoConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    MAHJONG("Mahjong",
            2,
            4,
            MahjongConstants.description,
            MahjongConstants.longDescription,
            MahjongConstants.imageUrl,
            MahjongConstants.bannerUrl,
            MahjongConstants.time,
            MahjongConstants.randomChance,
            MahjongConstants.minAge,
            MahjongConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    RISK("Risk",
            2,
            6,
            RiskConstants.description,
            RiskConstants.longDescription,
            RiskConstants.imageUrl,
            RiskConstants.bannerUrl,
            RiskConstants.time,
            RiskConstants.randomChance,
            RiskConstants.minAge,
            RiskConstants.gameCategories,
            BasicWinInformation.class,
            SWISS),
    BATTLESHIP("Battleship",
            2,
            2,
            BattleshipConstants.description,
            BattleshipConstants.longDescription,
            BattleshipConstants.imageUrl,
            BattleshipConstants.bannerUrl,
            BattleshipConstants.time,
            BattleshipConstants.randomChance,
            BattleshipConstants.minAge,
            BattleshipConstants.gameCategories,
            BasicWinInformation.class,
            SWISS);

    private final String id;
    private final String name;
    private final int minPlayers;
    private final int maxPlayers;
    private final String description;
    private final String longDescription;
    private final String imageUrl;
    private final String bannerUrl;
    private final Class<? extends WinInformation> winInformation;
    private final Set<TournamentType> allowedTournamentTypes;
    private final String time;
    private final Integer randomChance;
    private final Integer minAge;
    private final Set<GameCategory> gameCategories;

    Game(String name, int minPlayers, int maxPlayers, String description, String longDescription,
         String imageUrl, String bannerUrl, String time, Integer randomChance, Integer minAge, Set<GameCategory> gameCategories, Class<? extends WinInformation> winInformation,
         TournamentType... allowedTournamentTypes) {
        this.id = this.name();
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.description = description;
        this.longDescription = longDescription;
        this.imageUrl = imageUrl;
        this.bannerUrl = bannerUrl;
        this.time = time;
        this.randomChance = randomChance;
        this.minAge = minAge;
        this.gameCategories = gameCategories;
        this.winInformation = winInformation;
        this.allowedTournamentTypes = Sets.newHashSet(allowedTournamentTypes);
    }

    public String getId() {
        return id;
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

    public String getLongDescription() {
        return longDescription;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public Class<? extends WinInformation> getWinInformation() {
        return winInformation;
    }

    public Set<TournamentType> getAllowedTournamentTypes() {
        return allowedTournamentTypes;
    }

    public String getTime() {
        return time;
    }

    public Integer getRandomChance() {
        return randomChance;
    }

    public Set<GameCategory> getGameCategories() {
        return gameCategories;
    }

    public Integer getMinAge() {
        return minAge;
    }
}
