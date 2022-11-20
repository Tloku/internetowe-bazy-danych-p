package pl.edu.pwr.gymplanserver.training_plan.model;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.MuscleGroup;

import java.time.LocalDate;

@Component
@Getter
@Setter
@RequiredArgsConstructor
public class TrainingPlanTableData {
    int id;
    String name;
    LocalDate dateFrom;
    LocalDate dateTo;
    Difficulty mainDifficulty;
    MuscleGroup mainMuscleGroup;
}
