package pl.edu.pwr.gymplanserver.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum MuscleGroup {
    BACK("back"),
    THIGHS("thighs"),
    LEGS("legs"),
    BELLY("belly"),
    BICEPS("biceps"),
    TRICEPS("triceps"),
    BUTTOCKS("buttocks"),
    CHEST("chest"),
    CALVES("calves"),
    SHOULDERS("shoulders");

    private final String value;

    MuscleGroup(String value) {
        this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
        return String.valueOf(value);
    }

    @JsonCreator
    public static MuscleGroup fromValue(String text) {
        for (MuscleGroup m: MuscleGroup.values()) {
            if (String.valueOf(m.value).equals(text)) {
                return m;
            }
        }
        return null;
    }
}
