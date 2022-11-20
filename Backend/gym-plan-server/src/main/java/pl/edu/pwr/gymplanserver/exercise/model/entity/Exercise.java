package pl.edu.pwr.gymplanserver.exercise.model.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.MuscleGroup;
import pl.edu.pwr.gymplanserver.enums.PostgreSQLEnumType;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithReps;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@TypeDef(
        name = "pgsql_enum",
        typeClass = PostgreSQLEnumType.class
)
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String exerciseName;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "difficulty")
    @Type(type="pgsql_enum")
    private Difficulty difficulty;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "muscle_group")
    @Type(type="pgsql_enum")
    private MuscleGroup muscleGroup;

    private String url;

    private String description;

    @OneToMany(mappedBy = "exercise")
    private List<ExerciseWithReps> exercisesWithReps;

}
