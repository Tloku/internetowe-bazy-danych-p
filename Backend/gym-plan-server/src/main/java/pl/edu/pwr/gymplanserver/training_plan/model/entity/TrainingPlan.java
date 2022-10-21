package pl.edu.pwr.gymplanserver.training_plan.model.entity;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.gym_user.model.GymUser;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class TrainingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String name;
    private MuscleGroup mainMuscleGroup;

    @OneToMany(mappedBy = "trainingPlan")
    private List<ExerciseWithReps> exercisesWithReps;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private GymUser gymUser;
}
