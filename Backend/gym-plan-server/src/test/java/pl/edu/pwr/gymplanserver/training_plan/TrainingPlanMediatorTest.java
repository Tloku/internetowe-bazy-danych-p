package pl.edu.pwr.gymplanserver.training_plan;

import org.checkerframework.checker.units.qual.C;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise.repository.ExerciseRepository;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise_with_reps.repository.ExerciseWithRepsRepository;
import pl.edu.pwr.gymplanserver.gym_user.model.GymUser;
import pl.edu.pwr.gymplanserver.gym_user.repository.GymUserRepository;
import pl.edu.pwr.gymplanserver.training_plan.exceptions.TrainingPlanNotFoundException;
import pl.edu.pwr.gymplanserver.training_plan.model.CreatePlanRequest;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;
import pl.edu.pwr.gymplanserver.training_plan.repository.TrainingPlanRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("Training Plan Mediator Tests")
class TrainingPlanMediatorTest {
    private TrainingPlanRepository repository = Mockito.mock(TrainingPlanRepository.class);
    private TrainingPlanTranslator translator = new TrainingPlanTranslatorImpl();
    private ExerciseRepository exerciseRepository = Mockito.mock(ExerciseRepository.class);
    private ExerciseWithRepsRepository exerciseWithRepsRepository = Mockito.mock(ExerciseWithRepsRepository.class);
    private GymUserRepository gymUserRepository = Mockito.mock(GymUserRepository.class);
    private TrainingPlanService service = new TrainingPlanService(exerciseRepository, exerciseWithRepsRepository);
    private TrainingPlanMediator mediator = new TrainingPlanMediator(translator, repository, service, gymUserRepository);


    @Test
    @DisplayName("Get Training Plan Data By login - correct")
    void getTrainingPlanDataByLoginCorrect() {
        // given
        String login = "login";
        List<TrainingPlan> trainingPlans = new ArrayList<>();
        trainingPlans.add(new TrainingPlan());
        when(repository.findAllGymUsersTrainingPlans(login)).thenReturn(trainingPlans);
        // when
        List<TrainingPlanTableData> resp = mediator.getTrainingPlanDataByLogin(login);
        // then
        assertEquals(1, resp.size());
    }

    @Test
    @DisplayName("Get Training Plan Data By login - Throw Error")
    void getTrainingPlanDataByLoginThrowError() {
        // given
        String login = "login";
        List<TrainingPlan> trainingPlans = new ArrayList<>();
        when(repository.findAllGymUsersTrainingPlans(login)).thenReturn(trainingPlans);
        // when / then
        assertThrows(TrainingPlanNotFoundException.class, () -> {
            mediator.getTrainingPlanDataByLogin(login);
        });
    }

    @Test
    @DisplayName("Create Training Plan - correct")
    void createTrainingPlanCorrect() {
        // given
        CreatePlanRequest request = new CreatePlanRequest();
        List<ExerciseWithRepsTableData> exerciseWithRepsTableData = new ArrayList<>();
        ExerciseWithRepsTableData exercise = new ExerciseWithRepsTableData();
        exercise.setExerciseId(1);
        exercise.setExerciseName("ex");
        exercise.setDifficulty(Difficulty.MEDIUM);
        exercise.setMuscleGroup(MuscleGroup.SHOULDERS);
        exercise.setReps(20);
        exercise.setSeries(1);
        exerciseWithRepsTableData.add(exercise);
        request.setName("Plan 1");
        request.setExerciseWithReps(exerciseWithRepsTableData);
        GymUser user = new GymUser();
        user.setId(1);
        when(gymUserRepository.findById(1)).thenReturn(Optional.of(user));
        TrainingPlan plan = new TrainingPlan();
        plan.setId(2);
        when(repository.save(plan)).thenReturn(plan);
        // when
        int resp = mediator.createTrainingPlan(request);
        // then
        assertEquals(2, resp);
    }

    @Test
    @DisplayName("Delete plan throws exception, id is null")
    void deleteTrainingPlanBadId() {
        // given
        Integer id = null;
        // when / then
        assertThrows(RuntimeException.class, () -> {
            mediator.deleteTrainingPlan(id);
        });
    }

    @Test
    @DisplayName("Delete plan throws exception, plan doesnt exists")
    void deleteTrainingPlanNotExistingPlan() {
        // given
        Integer id = 1;
        when(repository.findById(id)).thenReturn(Optional.empty());
        // when / then
        assertThrows(RuntimeException.class, () -> {
            mediator.deleteTrainingPlan(id);
        });
    }
}