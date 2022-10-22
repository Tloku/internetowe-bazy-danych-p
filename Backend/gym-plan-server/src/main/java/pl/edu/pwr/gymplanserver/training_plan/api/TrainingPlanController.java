package pl.edu.pwr.gymplanserver.training_plan.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value ="/api/training_plan")
@RequiredArgsConstructor
public class TrainingPlanController {

    private final TrainingPlanAdapter trainingPlanAdapter;

    @GetMapping(value = "/{login}")
    public List<TrainingPlanTableData> getTrainingPlanTableDataByLogin(@PathVariable String login) {
        return trainingPlanAdapter.getTrainingPlanDataByLogin(login);
    }
}
