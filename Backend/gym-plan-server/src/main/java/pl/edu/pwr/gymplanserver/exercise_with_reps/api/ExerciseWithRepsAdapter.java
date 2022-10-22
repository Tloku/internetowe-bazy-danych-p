package pl.edu.pwr.gymplanserver.exercise_with_reps.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;

import java.util.List;

@Component
public interface ExerciseWithRepsAdapter {
    List<ExerciseWithRepsTableData> getExercisesTableDataByPlanId(int planId);
}
