package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.mapper.BodyTypeMapper;
import ru.kolesnikov.autosales.service.BodyTypeService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping(path = "/api/bodytypes")
public class BodyTypeController {

    private final BodyTypeService bodyTypeService;
    private final BodyTypeMapper bodyTypeMapper;

    public BodyTypeController(
            BodyTypeService bodyTypeService,
            BodyTypeMapper bodyTypeMapper) {
        this.bodyTypeService = bodyTypeService;
        this.bodyTypeMapper = bodyTypeMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody ReferenceDataDto referenceDataDto) {
        bodyTypeService.create(referenceDataDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody ReferenceDataDto referenceDataDto) {
        bodyTypeService.updateById(id, referenceDataDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ReferenceDataDto> getAll() {
        return bodyTypeMapper.toBodyTypeDto(bodyTypeService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        bodyTypeService.deleteById(id);
    }
}
