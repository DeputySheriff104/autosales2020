package ru.kolesnikov.autosales.data.specifications;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SearchCriteria {
    private String key;
    private String operation;
    private Object value;
}
