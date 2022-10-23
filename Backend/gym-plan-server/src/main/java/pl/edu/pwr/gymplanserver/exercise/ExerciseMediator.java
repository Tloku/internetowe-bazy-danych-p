package pl.edu.pwr.gymplanserver.exercise;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise.api.ExerciseAdapter;
import pl.edu.pwr.gymplanserver.exercise.exceptions.ExerciseNotFoundException;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseTableData;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.exercise.repository.ExerciseRepository;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseSpecification;
import pl.edu.pwr.gymplanserver.exercise.model.GetPaginatedAndFilteredExercisesReq;
import pl.edu.pwr.gymplanserver.exercise.model.SearchCriteria;
import pl.edu.pwr.gymplanserver.exercise.model.SearchOperation;

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
        ExerciseSpecification filters = new ExerciseSpecification();

        if(!req.getExerciseName().isEmpty() && !req.getExerciseName().isBlank()) {
            filters.add(new SearchCriteria("name", req.getExerciseName(), SearchOperation.MATCH));
        }

        if(req.getDifficulty() != null) {
            filters.add(new SearchCriteria("difficulty", req.getDifficulty(), SearchOperation.MATCH));
        }

        if(req.getMuscleGroup() != null) {
            filters.add(new SearchCriteria("difficulty", req.getDifficulty(), SearchOperation.MATCH));
        }

        Pageable pageable = PageRequest.of(req.getPage(), req.getSize());

        Page<Exercise> paginatedExercises = repository.findAll(filters, pageable);

        return paginatedExercises.get()
                .map(translator::toTableData)
                .collect(Collectors.toList());
    }
}
