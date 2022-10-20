package pl.edu.pwr.gymplanserver.exercise.model.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.enums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="Exercise")
@Getter
@Setter
@RequiredArgsConstructor
public class Exercise {

    @Id
    private int id;
    private String name;
    private Difficulty difficulty;
    private MuscleGroup muscleGroup;
    private String url;

}
