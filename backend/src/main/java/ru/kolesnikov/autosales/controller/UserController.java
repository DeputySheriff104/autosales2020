package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.UserDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleAdDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleUserDto;
import ru.kolesnikov.autosales.data.mapper.AdMapper;
import ru.kolesnikov.autosales.data.mapper.UserMapper;
import ru.kolesnikov.autosales.service.AdService;
import ru.kolesnikov.autosales.service.UserService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping(path = "/api/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(
            UserService userService,
            UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody SimpleUserDto simpleUserDto) {
        userService.create(simpleUserDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody SimpleUserDto simpleUserDto) {
        userService.updateById(id, simpleUserDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<UserDto> getAll() {
        return userMapper.toUserDto(userService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }
}
