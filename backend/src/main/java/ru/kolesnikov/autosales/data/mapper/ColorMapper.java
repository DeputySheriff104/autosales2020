package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.entity.Color;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ColorMapper {

    public ReferenceDataDto toColorDto(Color color) {
        return new ReferenceDataDto(
                color.getId(),
                color.getName()
        );
    }

    public List<ReferenceDataDto> toColorDto(List<Color> colors) {
        return colors.stream()
                .map(this::toColorDto)
                .collect(Collectors.toList());
    }
}
