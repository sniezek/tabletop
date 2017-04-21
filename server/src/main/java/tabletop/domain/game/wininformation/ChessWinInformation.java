package tabletop.domain.game.wininformation;

public class ChessWinInformation extends BasicWinInformation {
    private int moves;

    public ChessWinInformation() {
    }

    public int getMoves() {
        return moves;
    }

    public void setMoves(int moves) {
        this.moves = moves;
    }
}
