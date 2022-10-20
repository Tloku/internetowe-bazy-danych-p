package pl.edu.pwr.gymplanserver.enums;

public enum MuscleGroup {
    BACK("Plecy"),
    BICEPS("Biceps"),
    TRICEPS("Triceps"),
    CHEST("Klatka piersiowa"),
    CALVES("Łydki"),
    LEGS("Nogi"),
    SHOULDERS("Barki"),
    BELLY("Brzuch");

    final String muscleGroup;
    MuscleGroup(String muscleGroup) {
        this.muscleGroup = muscleGroup;
    }
}
