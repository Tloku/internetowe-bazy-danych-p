package pl.edu.pwr.gymplanserver.exercise_with_reps.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;

import javax.persistence.*;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class ExerciseWithReps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int reps;
    private int series;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "plan_id")
    private TrainingPlan trainingPlan;
}

