package pl.edu.pwr.gymplanserver.enums;

public enum Difficulty {
    EASY("Łatwe"),
    MEDIUM("Średnie"),
    HARD("Trudne");

    final String difficulty;

    Difficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}
