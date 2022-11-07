package pl.edu.pwr.gymplanserver.exercise_with_reps;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ExerciseWithRepsTranslator {

    ExerciseWithRepsTranslator INSTANCE = Mappers.getMapper(ExerciseWithRepsTranslator.class);

    List<ExerciseWithRepsTableData> toTableData(List<ExerciseWithReps> exercisesWithReps);
}
