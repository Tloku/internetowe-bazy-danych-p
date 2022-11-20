package pl.edu.pwr.gymplanserver.exercise_with_reps.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;
@Component
@Getter
@Setter
@RequiredArgsConstructor
public class ExerciseWithRepsTableData {
    private int id;
    private String exerciseName;
    private String exerciseId;
    private int reps;
    private int series;
    private Difficulty difficulty;
    private MuscleGroup muscleGroup;
}
