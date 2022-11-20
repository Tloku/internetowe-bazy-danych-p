package pl.edu.pwr.gymplanserver.training_plan;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.exercise.repository.ExerciseRepository;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise_with_reps.repository.ExerciseWithRepsRepository;
import pl.edu.pwr.gymplanserver.gym_user.repository.GymUserRepository;
import pl.edu.pwr.gymplanserver.training_plan.api.TrainingPlanAdapter;
import pl.edu.pwr.gymplanserver.training_plan.exceptions.TrainingPlanNotFoundException;
import pl.edu.pwr.gymplanserver.training_plan.model.CreatePlanRequest;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.training_plan.model.UpdatePlanRequest;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;
import pl.edu.pwr.gymplanserver.training_plan.repository.TrainingPlanRepository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class TrainingPlanMediator implements TrainingPlanAdapter {

    private final TrainingPlanTranslator translator;
    private final TrainingPlanRepository repository;
    private final TrainingPlanService service;
    private final GymUserRepository gymUserRepository;
    private final ExerciseWithRepsRepository exerciseWithRepsRepository;

    @Override
    public List<TrainingPlanTableData> getTrainingPlanDataByLogin(String login) {

        List<TrainingPlan> trainingPlans = repository.findAllGymUsersTrainingPlans(login);

        if(trainingPlans.isEmpty()) {
            throw new TrainingPlanNotFoundException("Couldn't find training plan for user with login:  " + login);
        }

        return translator.toTableData(trainingPlans);
    }

    @Override
    @Transactional
    public Integer createTrainingPlan(CreatePlanRequest request) {
        if (request == null){
            throw new RuntimeException();
        }
        LocalDate today = LocalDate.now();
        List<ExerciseWithRepsTableData> exercisesFromRequest = request.getExerciseWithReps();
        String planName = request.getName();
        List<ExerciseWithReps> toSave = new ArrayList<>();
        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlan.setName(planName);
        trainingPlan.setDateFrom(today);
        trainingPlan.setDateTo(today.plusDays(exercisesFromRequest.size() * 2L));
        trainingPlan.setGymUser(gymUserRepository.findById(1).orElseThrow());
        trainingPlan.setMainDifficulty(Difficulty.MEDIUM);
        trainingPlan.setMainMuscleGroup(MuscleGroup.SHOULDERS);

        for (ExerciseWithRepsTableData exerciseWithRepsTableData : exercisesFromRequest) {
            ExerciseWithReps exerciseWithReps = service.mapExercises(exerciseWithRepsTableData, trainingPlan);
            toSave.add(exerciseWithReps);
        }
        trainingPlan.setExercisesWithReps(toSave);
        trainingPlan = repository.save(trainingPlan);
        return trainingPlan.getId();
    }

    @Override
    @Transactional
    public Integer updateTrainingPlan(UpdatePlanRequest request) {
        if (request == null) {
            throw new RuntimeException();
        }

        Optional<TrainingPlan> trainingPlan = repository.findById(request.getPlanId());

        if (trainingPlan.isEmpty()) {
            throw new RuntimeException();
        }

        repository.deleteExercisesWithRepsFromTrainingPlanByPlanId(request.getPlanId());

        List<ExerciseWithRepsTableData> exerciseWithRepsTableData = request.getExerciseWithReps();
        List<ExerciseWithReps> toSave = new ArrayList<>();

        for (ExerciseWithRepsTableData exerciseFromRequest : exerciseWithRepsTableData) {
            ExerciseWithReps exerciseWithReps = service.mapExercises(exerciseFromRequest, trainingPlan.get());
            toSave.add(exerciseWithReps);
        }
        trainingPlan.get().setExercisesWithReps(toSave);
        return repository.save(trainingPlan.get()).getId();
    }


}
