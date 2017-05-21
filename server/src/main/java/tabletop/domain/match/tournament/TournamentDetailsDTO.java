package tabletop.domain.match.tournament;

/**
 * Created by Rafal on 2017-05-21.
 */
public class TournamentDetailsDTO {
    private Long id;
    private String name;
    private boolean isInitialized;

    public TournamentDetailsDTO(Long id, String name, boolean isInitialized) {
        this.id = id;
        this.name = name;
        this.isInitialized = isInitialized;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isInitialized() {
        return isInitialized;
    }

    public void setInitialized(boolean initialized) {
        isInitialized = initialized;
    }
}
