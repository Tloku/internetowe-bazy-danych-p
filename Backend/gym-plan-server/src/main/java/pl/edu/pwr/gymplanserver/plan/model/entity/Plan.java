package pl.edu.pwr.gymplanserver.plan.model.entity;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.enums.MuscleGroup;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity(name="Plan")
@Getter
@Setter
@RequiredArgsConstructor
public class Plan {

    @Id
    private int id;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String name;
    private MuscleGroup mainMuscleGroup;
}
