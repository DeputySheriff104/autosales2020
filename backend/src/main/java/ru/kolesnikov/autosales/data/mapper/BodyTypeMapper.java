package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.entity.BodyType;
import ru.kolesnikov.autosales.data.entity.Color;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BodyTypeMapper {

    public ReferenceDataDto toBodyTypeDto(BodyType bodyType) {
        return new ReferenceDataDto(
                bodyType.getId(),
                bodyType.getName()
        );
    }

    public List<ReferenceDataDto> toBodyTypeDto(List<BodyType> bodyTypes) {
        return bodyTypes.stream()
                .map(this::toBodyTypeDto)
                .collect(Collectors.toList());
    }
}
