package ru.kolesnikov.autosales.data.dto.simple;

import lombok.*;
import ru.kolesnikov.autosales.data.dto.EngineDto;
import ru.kolesnikov.autosales.data.dto.ModelDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SimpleVehicleDto {

    private Long id;
    private Long colorId;
    private Long modelId;
    private Long bodytypeId;
    private Long engineId;
    private Long regionId;
    private Integer mileage;
    private Integer year;
}
