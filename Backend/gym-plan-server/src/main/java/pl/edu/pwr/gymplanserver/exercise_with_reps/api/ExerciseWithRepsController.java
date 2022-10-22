package pl.edu.pwr.gymplanserver.exercise_with_reps.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value ="api/exercisesWithReps")
@RequiredArgsConstructor
public class ExerciseWithRepsController {


    private final ExerciseWithRepsAdapter exerciseWithRepsAdapter;

    @GetMapping("/{planId}")
    public List<ExerciseWithRepsTableData> getExercisesTableDataByPlanId(@PathVariable int planId) {
        return exerciseWithRepsAdapter.getExercisesTableDataByPlanId(planId);
    }
}
