package pl.edu.pwr.gymplanserver.training_plan.api;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise.model.GetPaginatedAndFilteredExercisesReq;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;

import java.util.List;

@Component
public interface TrainingPlanAdapter {

    List<TrainingPlanTableData> getTrainingPlanDataByLogin(String login);
}
