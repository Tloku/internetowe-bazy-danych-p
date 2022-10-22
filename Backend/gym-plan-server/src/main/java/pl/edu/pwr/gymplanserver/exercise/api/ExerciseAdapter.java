package pl.edu.pwr.gymplanserver.exercise.api;


import org.springframework.stereotype.Component;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseDetail;

@Component
public interface ExerciseAdapter {
    ExerciseDetail getExerciseDetail(int id);
}
