package pl.edu.pwr.gymplanserver.exercise_with_reps.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty("id")
    private int id;
    @JsonProperty("exerciseName")
    private String exerciseName;
    @JsonProperty("exerciseId")
    private int exerciseId;
    @JsonProperty("reps")
    private int reps;
    @JsonProperty("series")
    private int series;
    @JsonProperty("difficulty")
    private Difficulty difficulty;
    @JsonProperty("muscleGroup")
    private MuscleGroup muscleGroup;
}
