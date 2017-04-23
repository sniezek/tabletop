package tabletop.domain.exceptions;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ErrorInfo {

    USER_NOT_FOUND("User not found"),
    TOURNAMENT_NOT_FOUND("Tournament not found"),
    UNKNOWN("Unknown error");

    private final String description;

    ErrorInfo(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}