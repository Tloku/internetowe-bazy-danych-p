package pl.edu.pwr.gymplanserver.exercise.model;

import lombok.Data;
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
public class ExerciseTableData {
    private int id;
    private String exerciseName;
    private MuscleGroup muscleGroup;
    private Difficulty difficulty;

}
