package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.entity.Color;
import ru.kolesnikov.autosales.data.entity.Manufacturer;
import ru.kolesnikov.autosales.data.repository.ManufacturerRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ManufacturerService {

    private final ManufacturerRepository manufacturerRepository;

    public ManufacturerService(ManufacturerRepository manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }

    public void create(ReferenceDataToCreateAndUpdateDto bodyType) {
        manufacturerRepository.create(bodyType.getName());
    }

    public void updateById(Long id, ReferenceDataToCreateAndUpdateDto bodyType) {
        manufacturerRepository.updateById(id, bodyType.getName());
    }

    public List<Manufacturer> getAll() {
        return new ArrayList<>(manufacturerRepository.findAll());
    }

    public void deleteById(Long id) {
        manufacturerRepository.deleteById(id);
    }
}
