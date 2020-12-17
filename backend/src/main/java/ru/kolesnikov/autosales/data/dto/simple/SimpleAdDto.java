package ru.kolesnikov.autosales.data.dto.simple;

import lombok.*;
import ru.kolesnikov.autosales.data.dto.UserDto;
import ru.kolesnikov.autosales.data.dto.VehicleDto;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SimpleAdDto {

    private Long id;
    private Long userId;
    private Long vehicleId;
    private String description;
    private Double price;
    private Instant date;
}
