package pl.edu.pwr.gymplanserver.exercise_with_reps.exceptions;

import org.springframework.http.HttpStatus;

public class ExercisesWithRepsNotFoundException extends RuntimeException {

    private final HttpStatus status;
    private final String code;
    private final String description;

    public ExercisesWithRepsNotFoundException(String description) {
        super(description);
        this.status = HttpStatus.NOT_FOUND;
        this.code = "404";
        this.description = description;
    }

}
