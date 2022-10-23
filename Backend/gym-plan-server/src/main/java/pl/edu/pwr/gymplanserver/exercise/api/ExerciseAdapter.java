package pl.edu.pwr.gymplanserver.exercise.api;


import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.GetPaginatedAndFilteredExercisesReq;

import java.util.List;

@Component
public interface ExerciseAdapter {
    ExerciseDetail getExerciseDetail(int id);

    List<ExerciseTableData> getExercisesToCreatePlan(GetPaginatedAndFilteredExercisesReq req);
}
