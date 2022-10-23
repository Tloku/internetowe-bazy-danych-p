package pl.edu.pwr.gymplanserver.exercise.model;


import lombok.*;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class SearchCriteria {
    private String key;
    private Object value;
    private SearchOperation operation;
}