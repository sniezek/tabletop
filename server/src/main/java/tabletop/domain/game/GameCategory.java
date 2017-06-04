package tabletop.domain.game;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum GameCategory {

    STRATEGY("Strategy"),
    WORD_GAME("Word game"),
    CARD_GAME("Card game"),
    FANTASY("Fantasy"),
    ECONOMIC("Economic");

    private String name;

    GameCategory(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }


}
