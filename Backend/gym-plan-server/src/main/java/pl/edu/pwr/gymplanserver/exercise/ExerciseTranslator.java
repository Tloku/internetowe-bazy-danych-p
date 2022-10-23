package pl.edu.pwr.gymplanserver.exercise;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;

@Mapper(componentModel =  "spring")
public interface ExerciseTranslator {

    ExerciseTranslator INSTANCE = Mappers.getMapper(ExerciseTranslator.class);

    ExerciseTableData toTableData(Exercise exercise);

    ExerciseDetail toDetail(Exercise exercise);
}
