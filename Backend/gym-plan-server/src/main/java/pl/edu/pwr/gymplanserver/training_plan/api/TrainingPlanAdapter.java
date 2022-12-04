package pl.edu.pwr.gymplanserver.training_plan.api;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise.model.GetPaginatedAndFilteredExercisesReq;
import pl.edu.pwr.gymplanserver.training_plan.model.CreatePlanRequest;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.training_plan.model.UpdatePlanRequest;

import java.util.List;

@Component
public interface TrainingPlanAdapter {

    List<TrainingPlanTableData> getTrainingPlanDataByLogin(String login);

    Integer createTrainingPlan(CreatePlanRequest request);

    Integer updateTrainingPlan(UpdatePlanRequest request);

    Boolean deleteTrainingPlan(Integer id);
}
