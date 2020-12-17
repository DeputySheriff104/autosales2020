package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.UserDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleUserDto;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.entity.User;
import ru.kolesnikov.autosales.data.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void create(SimpleUserDto simpleUserDto) {
        userRepository.create(
                simpleUserDto.getTypeId(),
                simpleUserDto.getFirstName(),
                simpleUserDto.getLastName(),
                simpleUserDto.getPhone(),
                simpleUserDto.getEmail(),
                simpleUserDto.getUsername(),
                simpleUserDto.getPassword());
    }

    public void updateById(Long id, SimpleUserDto simpleUserDto) {
        userRepository.updateById(
                id,
                simpleUserDto.getTypeId(),
                simpleUserDto.getFirstName(),
                simpleUserDto.getLastName(),
                simpleUserDto.getPhone(),
                simpleUserDto.getEmail(),
                simpleUserDto.getUsername(),
                simpleUserDto.getPassword());
    }

    public List<User> getAll() {
        return new ArrayList<>(userRepository.findAll());
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
