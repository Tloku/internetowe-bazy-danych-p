package pl.edu.pwr.gymplanserver.training_plan.api;

import lombok.RequiredArgsConstructor;
import org.hibernate.sql.Update;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.gymplanserver.training_plan.model.CreatePlanRequest;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.training_plan.model.UpdatePlanRequest;

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

    @PostMapping("/create")
    public Integer createTrainingPlan(@RequestBody CreatePlanRequest request) {
        return trainingPlanAdapter.createTrainingPlan(request);
    }

    @PostMapping("/update")
    public Integer updateTrainingPlan(@RequestBody UpdatePlanRequest request) {
        return trainingPlanAdapter.updateTrainingPlan(request);
    }

}
