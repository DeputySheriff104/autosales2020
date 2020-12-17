package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.entity.BodyType;
import ru.kolesnikov.autosales.data.entity.Color;
import ru.kolesnikov.autosales.data.repository.BodyTypeRepository;
import ru.kolesnikov.autosales.data.repository.ColorRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class BodyTypeService {

    private final BodyTypeRepository bodyTypeRepository;

    public BodyTypeService(BodyTypeRepository bodyTypeRepository) {
        this.bodyTypeRepository = bodyTypeRepository;
    }

    public void create(ReferenceDataDto referenceDataDto) {
        bodyTypeRepository.create(referenceDataDto.getName());
    }

    public void updateById(Long id, ReferenceDataDto referenceDataDto) {
        bodyTypeRepository.updateById(id, referenceDataDto.getName());
    }

    public List<BodyType> getAll() {
        return new ArrayList<>(bodyTypeRepository.findAll());
    }

    public void deleteById(Long id) {
        bodyTypeRepository.deleteById(id);
    }
}
