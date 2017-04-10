package tabletop.domain.events;

import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * Created by Kuba on 2017-04-09.
 */
public class Event {

    @Id
    private String name;

    private Date date;
    private String location;
    private String game;

    public Event() {
    }

    public String getName() {
        return name;
    }

    public Date getDate() {
        return date;
    }

    public String getGame() {
        return game;
    }

    public String getLocation() {
        return location;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setLocation(String location) {
        this.location = location;
    }

}
