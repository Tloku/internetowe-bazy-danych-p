package pl.edu.pwr.gymplanserver.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Difficulty {
    EASY("easy"),
    MEDIUM("medium"),
    HARD("hard");

    private final String value;

    Difficulty(String value) {
        this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
        return String.valueOf(value);
    }

    @JsonCreator
    public static Difficulty fromValue(String text) {
        for (Difficulty d : Difficulty.values()) {
            if (String.valueOf(d.value).equals(text)) {
                return d;
            }
        }
        return null;
    }
}
