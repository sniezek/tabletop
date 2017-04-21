package tabletop.domain.game;

import tabletop.domain.game.wininformation.ChessWinInformation;
import tabletop.domain.game.wininformation.WinInformation;

public enum Game {
    CHESS("Chess", 2, 2, ChessWinInformation.class);

    private final String name;
    private final int minPlayers;
    private final int maxPlayers;
    private final Class<? extends WinInformation> winInformation;

    Game(String name, int minPlayers, int maxPlayers, Class<? extends WinInformation> winInformation) {
        this.name = name;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.winInformation = winInformation;
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

    public Class<? extends WinInformation> getWinInformation() {
        return winInformation;
    }
}
