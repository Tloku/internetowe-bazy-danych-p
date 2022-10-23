package pl.edu.pwr.gymplanserver.exercise.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.GetPaginatedAndFilteredExercisesReq;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value ="/api/exercise")
@RequiredArgsConstructor
public class ExerciseController {

    private final ExerciseAdapter exerciseAdapter;

    @GetMapping("/{id}")
    public ExerciseDetail getExerciseDetail(@PathVariable String id) {
        return exerciseAdapter.getExerciseDetail(Integer.parseInt(id));
    }

    @PostMapping("/get")
    public List<ExerciseTableData> getPaginatedAndFilteredExercises(@RequestBody GetPaginatedAndFilteredExercisesReq request) {
        if(request == null) {
            return null;
        }
        return exerciseAdapter.getExercisesToCreatePlan(request);
    }

}
