package tabletop.domain.match.tournament;

import tabletop.domain.user.User;

import java.util.List;

/**
 * Created by Rafal on 2017-05-14.
 */
public class TournamentDTO {
    private String name;
    private User creator;
    private boolean isParticipant;
    private List<Pair<User>> pairs;

    public TournamentDTO(String name, User creator, List<Pair<User>> pairs, boolean isParticipant) {
        this.name = name;
        this.creator = creator;
        this.pairs = pairs;
        this.isParticipant = isParticipant;
    }

    public boolean isParticipant() {
        return isParticipant;
    }

    public void setParticipant(boolean participant) {
        isParticipant = participant;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public List<Pair<User>> getPairs() {
        return pairs;
    }

    public void setPairs(List<Pair<User>> pairs) {
        this.pairs = pairs;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
