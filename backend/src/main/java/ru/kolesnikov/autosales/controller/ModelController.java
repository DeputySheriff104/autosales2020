package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.ModelDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleAdDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleModelDto;
import ru.kolesnikov.autosales.data.mapper.AdMapper;
import ru.kolesnikov.autosales.data.mapper.ModelMapper;
import ru.kolesnikov.autosales.service.AdService;
import ru.kolesnikov.autosales.service.ModelService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping(path = "/api/models")
public class ModelController {

    private final ModelService modelService;
    private final ModelMapper modelMapper;

    public ModelController(
            ModelService modelService,
            ModelMapper modelMapper) {
        this.modelService = modelService;
        this.modelMapper = modelMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody SimpleModelDto simpleModelDto) {
        modelService.create(simpleModelDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody SimpleModelDto simpleModelDto) {
        modelService.updateById(id, simpleModelDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ModelDto> getAll() {
        return modelMapper.toModelDto(modelService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        modelService.deleteById(id);
    }

    @RequestMapping(method = GET, path = "/{manufacturerName}")
    public List<ModelDto> getAllByManufacturerName(@PathVariable String manufacturerName) {
        return modelMapper.toModelDto(modelService.getAllByManufacturerName(manufacturerName));
    }
}
