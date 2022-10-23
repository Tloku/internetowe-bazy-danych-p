package pl.edu.pwr.gymplanserver.exercise.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.gymplanserver.exercise.model.ExerciseSpecification;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;

import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Integer>, JpaSpecificationExecutor<Exercise> {

    Optional<Exercise> findExerciseById(int id);

    Page<Exercise> findAll(Specification<Exercise> filters, Pageable pageable);
}
