package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.entity.BodyType;
import ru.kolesnikov.autosales.data.entity.EngineType;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EngineTypeMapper {

    public ReferenceDataDto toEngineTypeDto(EngineType engineType) {
        return new ReferenceDataDto(
                engineType.getId(),
                engineType.getName()
        );
    }

    public List<ReferenceDataDto> toEngineTypeDto(List<EngineType> engineTypes) {
        return engineTypes.stream()
                .map(this::toEngineTypeDto)
                .collect(Collectors.toList());
    }
}
