package pl.edu.pwr.gymplanserver.plan.model;

import lombok.Data;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;

import java.time.LocalDate;

@Component
@Data
public class TrainingPlanTableData {
    int id;
    String name;
    LocalDate dateFrom;
    LocalDate dateTo;
    Difficulty difficulty;
    MuscleGroup muscleGroup;
}
