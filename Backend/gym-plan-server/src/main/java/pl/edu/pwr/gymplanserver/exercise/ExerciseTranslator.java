package pl.edu.pwr.gymplanserver.exercise;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;

@Mapper(componentModel =  "spring")
public interface ExerciseTranslator {

    ExerciseTranslator INSTANCE = Mappers.getMapper(ExerciseTranslator.class);

    ExerciseTableData toTableData(Exercise exercise);

    ExerciseDetail toDetail(Exercise exercise);

    Difficulty toDifficultyEntityModel(pl.edu.pwr.gymplanserver.enums.Difficulty difficulty);
    MuscleGroup toMuscleGroupEntityModel(pl.edu.pwr.gymplanserver.enums.MuscleGroup muscleGroup);
}
