package pl.edu.pwr.gymplanserver.training_plan;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.exercise.repository.ExerciseRepository;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise_with_reps.repository.ExerciseWithRepsRepository;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TrainingPlanService {

    private final ExerciseRepository exerciseRepository;
    private final ExerciseWithRepsRepository exerciseWithRepsRepository;

    //TODO zmienić na mappera
    ExerciseWithReps mapExercises(ExerciseWithRepsTableData exerciseFromRequest, TrainingPlan trainingPlan) {
        Optional<Exercise> exercise = exerciseRepository.findExerciseById(exerciseFromRequest.getExerciseId());
        if (exercise.isEmpty()) {
            throw new RuntimeException();
        }
        ExerciseWithReps exerciseWithReps = new ExerciseWithReps();
        exerciseWithReps.setExercise(exercise.get());
        exerciseWithReps.setReps(exerciseFromRequest.getReps());
        exerciseWithReps.setSeries(exerciseFromRequest.getSeries());
        exerciseWithReps.setTrainingPlan(trainingPlan);
        exerciseWithReps = exerciseWithRepsRepository.save(exerciseWithReps);
        return exerciseWithReps;
    }

}
