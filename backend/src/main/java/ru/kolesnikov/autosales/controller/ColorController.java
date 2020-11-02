package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.*;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.mapper.ColorMapper;
import ru.kolesnikov.autosales.service.ColorService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController
@RequestMapping(path = "/api/colors")
public class ColorController {

    private final ColorService colorService;
    private final ColorMapper colorMapper;

    public ColorController(
            ColorService colorService,
            ColorMapper colorMapper) {
        this.colorService = colorService;
        this.colorMapper = colorMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody ReferenceDataToCreateAndUpdateDto referenceDataDto) {
        colorService.create(referenceDataDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody ReferenceDataToCreateAndUpdateDto referenceDataDto) {
        colorService.updateById(id, referenceDataDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ReferenceDataDto> getAll() {
        return colorMapper.toColorDto(colorService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        colorService.deleteById(id);
    }
}
