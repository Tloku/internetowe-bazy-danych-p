package pl.edu.pwr.gymplanserver.exercise_with_reps;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise_with_reps.api.ExerciseWithRepsAdapter;
import pl.edu.pwr.gymplanserver.exercise_with_reps.exceptions.ExercisesWithRepsNotFoundException;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise_with_reps.repository.ExerciseWithRepsRepository;
import pl.edu.pwr.gymplanserver.training_plan.exceptions.TrainingPlanNotFoundException;
import pl.edu.pwr.gymplanserver.training_plan.repository.TrainingPlanRepository;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ExerciseWithRepsMediator implements ExerciseWithRepsAdapter {

    private final ExerciseWithRepsRepository repository;
    private final ExerciseWithRepsTranslator translator;
    private final TrainingPlanRepository trainingPlanRepository;


    @Override
    public List<ExerciseWithRepsTableData> getExercisesTableDataByPlanId(int planId) {
        if(!trainingPlanRepository.existsTrainingPlanById(planId)) {
            throw new TrainingPlanNotFoundException("Couldn't find training plan with id: " + planId);
        }

        List<ExerciseWithReps> exercisesWithReps = repository.getExercisesDataByPlanId(planId);

        if(exercisesWithReps.isEmpty()) {
            throw new ExercisesWithRepsNotFoundException("Training plan with given id has no exercises");
        }

        return translator.toTableData(exercisesWithReps);
    }
}
