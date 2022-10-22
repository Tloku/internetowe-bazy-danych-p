package pl.edu.pwr.gymplanserver.exercise_with_reps;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise_with_reps.api.ExerciseWithRepsAdapter;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;
import pl.edu.pwr.gymplanserver.exercise_with_reps.repository.ExerciseWithRepsRepository;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ExerciseWithRepsMediator implements ExerciseWithRepsAdapter {

    private final ExerciseWithRepsRepository repository;
    private final ExerciseWithRepsTranslator translator;


    @Override
    public List<ExerciseWithRepsTableData> getExercisesTableDataByPlanId(int planId) {
        return null;
    }
}
