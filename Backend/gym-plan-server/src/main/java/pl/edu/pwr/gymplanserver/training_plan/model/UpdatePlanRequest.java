package pl.edu.pwr.gymplanserver.training_plan.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import pl.edu.pwr.gymplanserver.exercise_with_reps.model.ExerciseWithRepsTableData;

import java.util.List;

@Getter
@Setter
public class UpdatePlanRequest {
    @JsonProperty("planId")
    private Integer planId;
    @JsonProperty("exerciseWithReps")
    private List<ExerciseWithRepsTableData> exerciseWithReps;
}
