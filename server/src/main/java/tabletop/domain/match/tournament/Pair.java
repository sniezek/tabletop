package tabletop.domain.match.tournament;

public class Pair<U> {
    private U host;
    private U guest;
    private int winner = 0;
    private int hostResult = 0;
    private int guestResult = 0;

    public Pair(U host, U guest) {
        this.host = host;
        this.guest = guest;
    }

    public Pair(U host, U guest, int winner, int hostResult, int guestResult) {
        this.host = host;
        this.guest = guest;
        this.winner = winner;
        this.hostResult = hostResult;
        this.guestResult = guestResult;
    }

    public Pair(U host, U guest, int hostResult, int guestResult) {
        this.host = host;
        this.guest = guest;
        this.hostResult = hostResult;
        this.guestResult = guestResult;
    }

    public U getHost() {
        return host;
    }

    public void setHost(U host) {
        this.host = host;
    }

    public U getGuest() {
        return guest;
    }

    public void setGuest(U guest) {
        this.guest = guest;
    }

    public int getWinner() {
        return winner;
    }

    public void setWinner(int winner) {
        this.winner = winner;
    }

    public int getHostResult() {
        return hostResult;
    }

    public void setHostResult(int hostResult) {
        this.hostResult = hostResult;
    }

    public int getGuestResult() {
        return guestResult;
    }

    public void setGuestResult(int guestResult) {
        this.guestResult = guestResult;
    }

    @Override
    public String toString() {
        return getHost() + ", " + getGuest();
    }
}
