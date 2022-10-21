package pl.edu.pwr.gymplanserver.exercise.model.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;

import javax.persistence.*;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Difficulty difficulty;
    private MuscleGroup muscleGroup;
    private String url;

    @OneToOne(mappedBy = "exercise")
    private ExerciseWithReps exerciseWithReps;

}
