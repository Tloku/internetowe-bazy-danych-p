package pl.edu.pwr.gymplanserver.exercise_with_reps;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;
import org.springframework.data.jpa.repository.Query;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ExerciseWithRepsTranslator {

    ExerciseWithRepsTranslator INSTANCE = Mappers.getMapper(ExerciseWithRepsTranslator.class);

    List<ExerciseWithRepsTableData> toTableData(List<ExerciseWithReps> exercisesWithReps);


    @Mappings({
            @Mapping(source = "exercise.id", target = "exerciseId"),
            @Mapping(source = "exercise.exerciseName", target = "exerciseName"),
            @Mapping(source = "exercise.difficulty", target = "difficulty"),
            @Mapping(source = "exercise.muscleGroup", target = "muscleGroup"),
            @Mapping(source = "exerciseWithReps.id", target = "id"),
            @Mapping(source = "exerciseWithReps.reps", target = "reps"),
            @Mapping(source = "exerciseWithReps.series", target = "series")
    })
    ExerciseWithRepsTableData oneToTableData(ExerciseWithReps exerciseWithReps, Exercise exercise);
}
