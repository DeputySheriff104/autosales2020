package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.entity.Manufacturer;
import ru.kolesnikov.autosales.data.entity.Region;
import ru.kolesnikov.autosales.data.repository.RegionRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class RegionService {

    private final RegionRepository regionRepository;

    public RegionService(RegionRepository regionRepository) {
        this.regionRepository = regionRepository;
    }

    public void create(ReferenceDataToCreateAndUpdateDto bodyType) {
        regionRepository.create(bodyType.getName());
    }

    public void updateById(Long id, ReferenceDataToCreateAndUpdateDto bodyType) {
        regionRepository.updateById(id, bodyType.getName());
    }

    public List<Region> getAll() {
        return new ArrayList<>(regionRepository.findAll());
    }

    public void deleteById(Long id) {
        regionRepository.deleteById(id);
    }
}
