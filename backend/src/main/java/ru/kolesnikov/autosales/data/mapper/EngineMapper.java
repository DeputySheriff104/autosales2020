package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.EngineDto;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.entity.Engine;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EngineMapper {

    public EngineDto toEngineDto(Engine engine) {
        return new EngineDto(
                engine.getId(),
                new EngineTypeMapper().toEngineTypeDto(engine.getType()),
                engine.getHorsepower(),
                engine.getDisplacement(),
                engine.getPower()
        );
    }

    public List<EngineDto> toEngineDto(List<Engine> engines) {
        return engines.stream()
                .map(this::toEngineDto)
                .collect(Collectors.toList());
    }
}
