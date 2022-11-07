package pl.edu.pwr.gymplanserver.exercise.model;

import org.springframework.data.jpa.domain.Specification;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.Difficulty;
import pl.edu.pwr.gymplanserver.enums.simpleEnums.MuscleGroup;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

public interface ExerciseCriteria {

    Predicate[] EMPTY_PREDICATE_ARRAY = new Predicate[0];

    static Specification<Exercise> toCriteria(
            final Difficulty difficulty,
            final MuscleGroup muscleGroup,
            final String exerciseName
    ) {
        return (root, query, cb) -> {
            final List<Predicate> predicates = new ArrayList<>();

            if (difficulty != null) {
                final var in = cb.in(root.get("difficulty"));
                in.value(difficulty);
                predicates.add(in);
            }

            if (muscleGroup != null) {
                final var in = cb.in(root.get("muscleGroup"));
                in.value(muscleGroup);
                predicates.add(in);
            }

            if (exerciseName != null && !exerciseName.isBlank()) {
                predicates.add(cb.like(
                        cb.lower(root.get("exerciseName")),
                        "%" + exerciseName.toLowerCase() + "%"
                ));
            }

            return cb.and(predicates.toArray(EMPTY_PREDICATE_ARRAY));
        };
    }

}
