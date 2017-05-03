package tabletop.domain.match.tournament;

import tabletop.domain.match.tournament.converters.IntegerListConverter;

import javax.persistence.*;
import java.util.List;

@MappedSuperclass
public class TournamentProcess {

    @Id
    @GeneratedValue
    private Integer id;

//    @OneToOne(fetch = FetchType.LAZY)
//    @PrimaryKeyJoinColumn
//    private Tournament tournament;

    @Convert(converter = IntegerListConverter.class)
    private List<Integer> results;

    public TournamentProcess() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

//    public Tournament getTournament() {
//        return tournament;
//    }
//
//    public void setTournament(Tournament tournament) {
//        this.tournament = tournament;
//    }

    public List<Integer> getResults() {
        return results;
    }

    public void setResults(List<Integer> results) {
        this.results = results;
    }
}
