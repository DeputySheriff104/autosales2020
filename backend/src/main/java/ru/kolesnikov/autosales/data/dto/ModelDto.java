package ru.kolesnikov.autosales.data.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ModelDto {

    private Long id;
    private ReferenceDataDto manufacturer;
    private String name;
}
