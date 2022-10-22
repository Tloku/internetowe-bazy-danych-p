package pl.edu.pwr.gymplanserver.exercise_with_reps.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;

import java.util.List;

@Repository
public interface ExerciseWithRepsRepository extends JpaRepository<ExerciseWithReps, Integer> {


    @Query("SELECT e FROM ExerciseWithReps e WHERE e.trainingPlan.id = ?1")
    List<ExerciseWithReps> getExercisesDataByPlanId(int planId);
}
