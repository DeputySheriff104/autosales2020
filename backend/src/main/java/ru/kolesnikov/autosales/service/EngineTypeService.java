package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.entity.Color;
import ru.kolesnikov.autosales.data.entity.EngineType;
import ru.kolesnikov.autosales.data.repository.EngineTypeRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EngineTypeService {

    private final EngineTypeRepository engineTypeRepository;

    public EngineTypeService(EngineTypeRepository engineTypeRepository) {
        this.engineTypeRepository = engineTypeRepository;
    }

    public void create(ReferenceDataToCreateAndUpdateDto bodyType) {
        engineTypeRepository.create(bodyType.getName());
    }

    public void updateById(Long id, ReferenceDataToCreateAndUpdateDto bodyType) {
        engineTypeRepository.updateById(id, bodyType.getName());
    }

    public List<EngineType> getAll() {
        return new ArrayList<>(engineTypeRepository.findAll());
    }

    public void deleteById(Long id) {
        engineTypeRepository.deleteById(id);
    }
}
