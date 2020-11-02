package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.entity.Manufacturer;
import ru.kolesnikov.autosales.data.entity.Region;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class RegionMapper {

    public ReferenceDataDto toRegionDto(Region region) {
        return new ReferenceDataDto(
                region.getId(),
                region.getName()
        );
    }

    public List<ReferenceDataDto> toRegionDto(List<Region> regions) {
        return regions.stream()
                .map(this::toRegionDto)
                .collect(Collectors.toList());
    }
}
