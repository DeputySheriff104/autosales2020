package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.EngineDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleAdDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleEngineDto;
import ru.kolesnikov.autosales.data.mapper.AdMapper;
import ru.kolesnikov.autosales.data.mapper.EngineMapper;
import ru.kolesnikov.autosales.service.AdService;
import ru.kolesnikov.autosales.service.EngineService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping(path = "/api/engines")
public class EngineController {

    private final EngineService engineService;
    private final EngineMapper engineMapper;

    public EngineController(
            EngineService engineService,
            EngineMapper engineMapper) {
        this.engineService = engineService;
        this.engineMapper = engineMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody SimpleEngineDto simpleEngineDto) {
        engineService.create(simpleEngineDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody SimpleEngineDto simpleEngineDto) {
        engineService.updateById(id, simpleEngineDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<EngineDto> getAll() {
        return engineMapper.toEngineDto(engineService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        engineService.deleteById(id);
    }
}
