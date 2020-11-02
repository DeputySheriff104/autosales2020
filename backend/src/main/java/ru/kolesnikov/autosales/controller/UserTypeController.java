package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.mapper.UserTypeMapper;
import ru.kolesnikov.autosales.service.UserTypeService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController
@RequestMapping(path = "/api/usertypes")
public class UserTypeController {

    private final UserTypeService userTypeService;
    private final UserTypeMapper userTypeMapper;

    public UserTypeController(UserTypeService userTypeService, UserTypeMapper userTypeMapper) {
        this.userTypeService = userTypeService;
        this.userTypeMapper = userTypeMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody ReferenceDataToCreateAndUpdateDto referenceDataDto) {
        userTypeService.create(referenceDataDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody ReferenceDataToCreateAndUpdateDto referenceDataDto) {
        userTypeService.updateById(id, referenceDataDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<ReferenceDataDto> getAll() {
        return userTypeMapper.toUserTypeDto(userTypeService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        userTypeService.deleteById(id);
    }
}
