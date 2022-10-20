package pl.edu.pwr.gymplanserver.plan;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.gymplanserver.plan.model.TrainingPlanTableData;
import pl.edu.pwr.gymplanserver.plan.model.entity.Plan;

@Mapper
public interface PlanTranslator {

    PlanTranslator INSTANCE = Mappers.getMapper(PlanTranslator.class);

    TrainingPlanTableData toTableData(Plan plan);
}
