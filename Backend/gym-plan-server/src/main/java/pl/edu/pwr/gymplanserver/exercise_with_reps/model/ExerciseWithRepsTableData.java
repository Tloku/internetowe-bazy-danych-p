package pl.edu.pwr.gymplanserver.exercise_with_reps.model;

import lombok.Data;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;

@Component
@Data
public class ExerciseWithRepsTableData {
    private int id;
    private String name;
    private int reps;
    private int series;
    private Difficulty difficulty;
    private MuscleGroup muscleGroup;
}
