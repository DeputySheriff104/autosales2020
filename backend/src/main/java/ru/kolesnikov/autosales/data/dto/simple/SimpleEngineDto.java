package ru.kolesnikov.autosales.data.dto.simple;

import lombok.*;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SimpleEngineDto {

    private Long id;
    private Long typeId;
    private Double horsepower;
    private Double displacement;
    private Double power;
}
