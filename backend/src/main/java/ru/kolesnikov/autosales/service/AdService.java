package ru.kolesnikov.autosales.service;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleAdDto;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.entity.BodyType;
import ru.kolesnikov.autosales.data.repository.AdRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdService {

    private final AdRepository adRepository;

    public AdService(AdRepository adRepository) {
        this.adRepository = adRepository;
    }

    public void create(SimpleAdDto simpleAdDto) {
        adRepository.create(
                simpleAdDto.getUserId(),
                simpleAdDto.getVehicleId(),
                simpleAdDto.getDescription(),
                simpleAdDto.getPrice());
    }

    public void updateById(Long id, SimpleAdDto simpleAdDto) {
        adRepository.updateById(
                id,
                simpleAdDto.getUserId(),
                simpleAdDto.getVehicleId(),
                simpleAdDto.getDescription(),
                simpleAdDto.getPrice());
    }

    public List<Object> getStatistics() {
        return new ArrayList<>(adRepository.getManufacturersAndMinMaxAveragePriceByCount());
    }

    public List<Ad> getAll() {
        return new ArrayList<>(adRepository.findAll());
    }

    public List<Ad> getAll(Specification<Ad> spec) {
        return new ArrayList<>(adRepository.findAll(spec));
    }

    public void deleteById(Long id) {
        adRepository.deleteById(id);
    }
}
