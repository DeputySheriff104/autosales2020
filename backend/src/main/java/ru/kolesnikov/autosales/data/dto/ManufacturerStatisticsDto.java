package ru.kolesnikov.autosales.data.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ManufacturerStatisticsDto {

    private String manufacturerName;
    private Long manufacturerAmount;
    private Long minPrice;
    private Long maxPrice;
    private Double avgPrice;
    private Long sumPrice;
}
