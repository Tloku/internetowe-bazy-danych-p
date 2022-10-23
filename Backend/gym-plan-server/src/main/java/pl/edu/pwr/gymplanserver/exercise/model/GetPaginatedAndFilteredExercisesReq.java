package pl.edu.pwr.gymplanserver.exercise.model;

import lombok.Data;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;

import java.awt.print.Pageable;

@Component
@Data
public class GetPaginatedAndFilteredExercisesReq {
    String exerciseName;
    MuscleGroup muscleGroup;
    Difficulty difficulty;
    int page;
    int size;
}
