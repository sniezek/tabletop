package tabletop.domain.game;

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
}
