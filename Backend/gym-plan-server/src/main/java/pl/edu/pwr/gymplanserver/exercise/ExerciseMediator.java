package pl.edu.pwr.gymplanserver.exercise;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise.api.ExerciseAdapter;
import pl.edu.pwr.gymplanserver.exercise.exceptions.ExerciseNotFoundException;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseCriteria;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.GetPaginatedAndFilteredExercisesReq;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.exercise.repository.ExerciseRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class ExerciseMediator implements ExerciseAdapter {

    private final ExerciseRepository repository;
    private final ExerciseTranslator translator;

    @Override
    public ExerciseDetail getExerciseDetail(int id) {
        Optional<Exercise> maybeExercise = repository.findExerciseById(id);

        if(maybeExercise.isEmpty()) {
            throw new ExerciseNotFoundException("Couldn't find exercise with id: " + id);
        }

        return translator.toDetail(maybeExercise.get());
    }


    public List<ExerciseTableData> getExercisesToCreatePlan(GetPaginatedAndFilteredExercisesReq req) {

        Pageable pageable = PageRequest.of(req.getPage(), req.getSize());

        Page<Exercise> paginatedExercises = repository.findAll(
                getExercisesSpecification(req), pageable);

        return paginatedExercises.get()
                .map(translator::toTableData)
                .collect(Collectors.toList());
    }


    private Specification<Exercise> getExercisesSpecification(GetPaginatedAndFilteredExercisesReq req) {
        return  ExerciseCriteria.toCriteria(
                translator.toDifficultyEntityModel(req.getDifficulty()),
                translator.toMuscleGroupEntityModel(req.getMuscleGroup()),
                req.getExerciseName()
        );
    }
}
