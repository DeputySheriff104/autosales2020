package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.mapper.RegionMapper;
import ru.kolesnikov.autosales.service.RegionService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController
@RequestMapping(path = "/api/regions")
public class RegionController {

    private final RegionService regionService;
    private final RegionMapper regionMapper;

    public RegionController(RegionService regionService, RegionMapper regionMapper) {
        this.regionService = regionService;
        this.regionMapper = regionMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody ReferenceDataToCreateAndUpdateDto referenceDataDto) {
        regionService.create(referenceDataDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody ReferenceDataToCreateAndUpdateDto referenceDataDto) {
        regionService.updateById(id, referenceDataDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ReferenceDataDto> getAll() {
        return regionMapper.toRegionDto(regionService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        regionService.deleteById(id);
    }
}
