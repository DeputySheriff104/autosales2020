package ru.kolesnikov.autosales.data.dto;

import lombok.*;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class AdDto {

    private Long id;
    private UserDto user;
    private VehicleDto vehicle;
    private String description;
    private Double price;
    private Instant date;
}
