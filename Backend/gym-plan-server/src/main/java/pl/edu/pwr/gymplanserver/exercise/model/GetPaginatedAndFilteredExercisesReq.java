package pl.edu.pwr.gymplanserver.exercise.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;

import java.awt.print.Pageable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetPaginatedAndFilteredExercisesReq {
    String exerciseName;
    @JsonProperty("muscleGroup")
    MuscleGroup muscleGroup;
    @JsonProperty("difficulty")
    Difficulty difficulty;
    int page;
    int size;
}
