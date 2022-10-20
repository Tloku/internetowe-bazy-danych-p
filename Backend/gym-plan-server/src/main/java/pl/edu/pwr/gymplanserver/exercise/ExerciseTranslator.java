package pl.edu.pwr.gymplanserver.exercise;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;

@Mapper
public interface ExerciseTranslator {

    ExerciseTranslator INSTANCE = Mappers.getMapper(ExerciseTranslator.class);

    ExerciseTableData toTableData(Exercise exercise);
}
