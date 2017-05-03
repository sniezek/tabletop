package tabletop.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import tabletop.domain.match.tournament.TournamentFinalResult;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @NotEmpty
    private String username;
    @NotEmpty
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @Email
    @NotEmpty
    private String email;
    @OneToMany(mappedBy = "user", fetch= FetchType.LAZY, cascade={CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JsonIgnore
    private List<TournamentFinalResult> tournamentFinalResults;

    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public List<TournamentFinalResult> getTournamentFinalResults() {
        return tournamentFinalResults;
    }

    public void setTournamentFinalResults(List<TournamentFinalResult> tournamentFinalResults) {
        this.tournamentFinalResults = tournamentFinalResults;
    }

    @Override
    public String toString() {
        return getUsername();
    }
}
