package pl.edu.pwr.gymplanserver.training_plan.exceptions;

import org.springframework.http.HttpStatus;

public class TrainingPlanNotFoundException extends RuntimeException{
        private final HttpStatus status;
        private final String code;
        private final String description;

        public TrainingPlanNotFoundException(String description) {
            super(description);
            this.status = HttpStatus.NOT_FOUND;
            this.code = "404";
            this.description = description;
        }
}

