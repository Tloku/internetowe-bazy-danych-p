package pl.edu.pwr.gymplanserver.exercise;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise.api.ExerciseAdapter;
import pl.edu.pwr.gymplanserver.exercise.exceptions.ExerciseNotFoundException;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.exercise.repository.ExerciseRepository;

import java.util.Optional;

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
}
