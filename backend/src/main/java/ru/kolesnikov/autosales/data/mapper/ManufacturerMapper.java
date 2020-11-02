package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.entity.EngineType;
import ru.kolesnikov.autosales.data.entity.Manufacturer;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ManufacturerMapper {

    public ReferenceDataDto toManufacturerDto(Manufacturer manufacturer) {
        return new ReferenceDataDto(
                manufacturer.getId(),
                manufacturer.getName()
        );
    }

    public List<ReferenceDataDto> toManufacturerDto(List<Manufacturer> manufacturers) {
        return manufacturers.stream()
                .map(this::toManufacturerDto)
                .collect(Collectors.toList());
    }
}
