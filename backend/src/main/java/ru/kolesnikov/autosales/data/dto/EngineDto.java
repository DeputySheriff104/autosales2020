package ru.kolesnikov.autosales.data.dto;

import lombok.*;

import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class EngineDto {

    private Long id;
    private ReferenceDataDto type;
    private Double horsepower;
    private Double displacement;
    private Double power;
}
