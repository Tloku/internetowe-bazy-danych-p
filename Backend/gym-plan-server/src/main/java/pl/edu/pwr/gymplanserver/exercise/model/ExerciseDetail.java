package pl.edu.pwr.gymplanserver.exercise.model;

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
public class ExerciseDetail {
    private int id;
    private String exerciseName;
    private Difficulty difficulty;
    private MuscleGroup muscleGroup;
    private String url;
    private String description;
}
