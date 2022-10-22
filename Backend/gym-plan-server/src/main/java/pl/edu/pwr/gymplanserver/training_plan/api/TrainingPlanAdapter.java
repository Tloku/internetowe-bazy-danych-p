package pl.edu.pwr.gymplanserver.training_plan.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;

import java.util.List;

@Component
public interface TrainingPlanAdapter {

    List<TrainingPlanTableData> getTrainingPlanDataByLogin(String login);
}
