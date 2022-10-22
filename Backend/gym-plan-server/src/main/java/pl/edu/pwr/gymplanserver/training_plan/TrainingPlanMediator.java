package pl.edu.pwr.gymplanserver.training_plan;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.training_plan.api.TrainingPlanAdapter;
import pl.edu.pwr.gymplanserver.training_plan.exceptions.TrainingPlanNotFoundException;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;
import pl.edu.pwr.gymplanserver.training_plan.repository.TrainingPlanRepository;

import java.util.List;

@Component
@RequiredArgsConstructor
public class TrainingPlanMediator implements TrainingPlanAdapter {

    private final TrainingPlanTranslator translator;
    private final TrainingPlanRepository repository;

    @Override
    public List<TrainingPlanTableData> getTrainingPlanDataByLogin(String login) {

        List<TrainingPlan> trainingPlans = repository.findAllGymUsersTrainingPlans(login);

        if(trainingPlans.isEmpty()) {
            throw new TrainingPlanNotFoundException("Couldn't find training plan for user with login:  " + login);
        }

        return translator.toTableData(trainingPlans);
    }
}
