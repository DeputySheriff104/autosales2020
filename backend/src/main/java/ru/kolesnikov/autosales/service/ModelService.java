package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ModelDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleModelDto;
import ru.kolesnikov.autosales.data.entity.Model;
import ru.kolesnikov.autosales.data.repository.ModelRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ModelService {

    private final ModelRepository modelRepository;

    public ModelService(ModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    public void create(SimpleModelDto simpleModelDto) {
        modelRepository.create(
                simpleModelDto.getManufacturerId(),
                simpleModelDto.getName());
    }

    public void updateById(Long id, SimpleModelDto simpleModelDto) {
        modelRepository.updateById(
                id,
                simpleModelDto.getManufacturerId(),
                simpleModelDto.getName());
    }

    public List<Model> getAll() {
        return new ArrayList<>(modelRepository.findAll());
    }

    public void deleteById(Long id) {
        modelRepository.deleteById(id);
    }

    public List<Model> getAllByManufacturerName(String manufacturerName) {
        return modelRepository.findAllByManufacturer_Name(manufacturerName);
    }
}
