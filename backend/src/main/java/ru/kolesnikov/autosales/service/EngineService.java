package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.EngineDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleEngineDto;
import ru.kolesnikov.autosales.data.entity.Engine;
import ru.kolesnikov.autosales.data.repository.EngineRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EngineService {

    private final EngineRepository engineRepository;

    public EngineService(EngineRepository engineRepository) {
        this.engineRepository = engineRepository;
    }

    public void create(SimpleEngineDto simpleEngineDto) {
        engineRepository.create(
                simpleEngineDto.getTypeId(),
                simpleEngineDto.getHorsepower(),
                simpleEngineDto.getDisplacement(),
                simpleEngineDto.getPower());
    }

    public void updateById(Long id, SimpleEngineDto simpleEngineDto) {
        engineRepository.updateById(
                id,
                simpleEngineDto.getTypeId(),
                simpleEngineDto.getHorsepower(),
                simpleEngineDto.getDisplacement(),
                simpleEngineDto.getPower());
    }

    public List<Engine> getAll() {
        return new ArrayList<>(engineRepository.findAll());
    }

    public void deleteById(Long id) {
        engineRepository.deleteById(id);
    }
}
