package pl.edu.pwr.gymplanserver.training_plan;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.gymplanserver.training_plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;

@Mapper
public interface TrainingPlanTranslator {

    TrainingPlanTranslator INSTANCE = Mappers.getMapper(TrainingPlanTranslator.class);

    TrainingPlanTableData toTableData(TrainingPlan trainingPlan);
}
