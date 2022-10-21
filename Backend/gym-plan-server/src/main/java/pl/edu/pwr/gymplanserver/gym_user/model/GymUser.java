package pl.edu.pwr.gymplanserver.gym_user.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.training_plan.model.entity.TrainingPlan;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class GymUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String login;
    private String email;
    private String password;

    @OneToMany(mappedBy = "gymUser")
    private List<TrainingPlan> trainingPlans;
}
