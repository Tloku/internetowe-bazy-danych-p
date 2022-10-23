package pl.edu.pwr.gymplanserver.exercise.model;

import org.springframework.data.jpa.domain.Specification;
import pl.edu.pwr.gymplanserver.exercise.model.entity.Exercise;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class ExerciseSpecification implements Specification<Exercise> {

    private List<SearchCriteria> list;

    public ExerciseSpecification() {
        this.list = new ArrayList<>();
    }

    public void add(SearchCriteria criteria) {
        list.add(criteria);
    }

    @Override
    public Predicate toPredicate(Root<Exercise> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        List<Predicate> predicates = new ArrayList<>();

        for(SearchCriteria criteria: list) {
            if(criteria.getOperation().equals(SearchOperation.MATCH)) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get(criteria.getKey())),
                        "%" + criteria.getValue().toString().toLowerCase() + "%")
                );
            }
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}
