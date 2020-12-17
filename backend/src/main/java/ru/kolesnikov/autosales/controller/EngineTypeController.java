package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.mapper.EngineTypeMapper;
import ru.kolesnikov.autosales.service.EngineTypeService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController
@RequestMapping(path = "/api/enginetypes")
public class EngineTypeController {

    private final EngineTypeService engineTypeService;
    private final EngineTypeMapper engineTypeMapper;

    public EngineTypeController(EngineTypeService engineTypeService, EngineTypeMapper engineTypeMapper) {
        this.engineTypeService = engineTypeService;
        this.engineTypeMapper = engineTypeMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody ReferenceDataDto referenceDataDto) {
        engineTypeService.create(referenceDataDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody ReferenceDataDto referenceDataDto) {
        engineTypeService.updateById(id, referenceDataDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ReferenceDataDto> getAll() {
        return engineTypeMapper.toEngineTypeDto(engineTypeService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        engineTypeService.deleteById(id);
    }
}
