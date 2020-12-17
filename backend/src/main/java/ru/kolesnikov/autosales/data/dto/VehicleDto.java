package ru.kolesnikov.autosales.data.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class VehicleDto {

    private Long id;
    private ReferenceDataDto color;
    private ModelDto model;
    private ReferenceDataDto bodytype;
    private EngineDto engine;
    private ReferenceDataDto region;
    private Integer mileage;
    private Integer year;
}
