package pl.edu.pwr.gymplanserver.training_plan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;

import java.util.List;

@Repository
public interface TrainingPlanRepository extends JpaRepository<TrainingPlan, Integer> {

    @Query("SELECT tp FROM TrainingPlan tp WHERE tp.gymUser.login = ?1")
    List<TrainingPlan> findAllGymUsersTrainingPlans(String login);

    boolean existsTrainingPlanById(int planId);

    @Query("DELETE FROM ExerciseWithReps e WHERE e.trainingPlan.id = ?1")
    @Modifying
    void deleteExercisesWithRepsFromTrainingPlanByPlanId(int planId);

}
