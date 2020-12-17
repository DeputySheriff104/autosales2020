package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.mapper.ManufacturerMapper;
import ru.kolesnikov.autosales.service.ManufacturerService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController
@RequestMapping(path = "/api/manufacturers")
public class ManufacturerController {

    private final ManufacturerService manufacturerService;
    private final ManufacturerMapper manufacturerMapper;

    public ManufacturerController(ManufacturerService manufacturerService, ManufacturerMapper manufacturerMapper) {
        this.manufacturerService = manufacturerService;
        this.manufacturerMapper = manufacturerMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody ReferenceDataDto referenceDataDto) {
        manufacturerService.create(referenceDataDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody ReferenceDataDto referenceDataDto) {
        manufacturerService.updateById(id, referenceDataDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ReferenceDataDto> getAll() {
        return manufacturerMapper.toManufacturerDto(manufacturerService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        manufacturerService.deleteById(id);
    }
}
