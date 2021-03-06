package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.entity.Color;
import ru.kolesnikov.autosales.data.repository.ColorRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ColorService {

    private final ColorRepository colorRepository;

    public ColorService(ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }

    public void create(ReferenceDataDto referenceDataDto) {
        colorRepository.create(referenceDataDto.getName());
    }

    public void updateById(Long id, ReferenceDataDto referenceDataDto) {
        colorRepository.updateById(id, referenceDataDto.getName());
    }

    public List<Color> getAll() {
        return new ArrayList<>(colorRepository.findAll());
    }

    public void deleteById(Long id) {
        colorRepository.deleteById(id);
    }
}
