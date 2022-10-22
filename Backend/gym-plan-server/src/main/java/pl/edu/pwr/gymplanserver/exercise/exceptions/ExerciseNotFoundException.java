package pl.edu.pwr.gymplanserver.exercise.exceptions;

import org.springframework.http.HttpStatus;

public class ExerciseNotFoundException extends RuntimeException {

    private final HttpStatus status;
    private final String code;
    private final String description;

    public ExerciseNotFoundException(String description) {
        super(description);
        this.status = HttpStatus.NOT_FOUND;
        this.code = "404";
        this.description = description;
    }
}
