package ru.kolesnikov.autosales.data.dto.simple;

import lombok.*;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SimpleModelDto {

    private Long id;
    private Long manufacturerId;
    private String name;
}
