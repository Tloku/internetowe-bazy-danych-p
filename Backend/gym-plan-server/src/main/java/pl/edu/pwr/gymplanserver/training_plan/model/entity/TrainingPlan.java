package pl.edu.pwr.gymplanserver.training_plan.model.entity;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import pl.edu.pwr.gymplanserver.enums.PostgreSQLEnumType;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;
import pl.edu.pwr.gymplanserver.gym_user.model.GymUser;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@TypeDef(
        name = "pgsql_enum",
        typeClass = PostgreSQLEnumType.class
)
public class TrainingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "muscle_group")
    @Type(type="pgsql_enum")
    private MuscleGroup mainMuscleGroup;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "difficulty")
    @Type(type="pgsql_enum")
    private Difficulty mainDifficulty;

    @OneToMany(mappedBy = "trainingPlan")
    private List<ExerciseWithReps> exercisesWithReps;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private GymUser gymUser;
}
