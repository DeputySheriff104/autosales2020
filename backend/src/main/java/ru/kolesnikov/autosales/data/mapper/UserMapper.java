package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.UserDto;
import ru.kolesnikov.autosales.data.entity.User;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    public UserDto toUserDto(User user) {
        return new UserDto(
                user.getId(),
                new UserTypeMapper().toUserTypeDto(user.getType()),
                user.getUsername(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getPhone(),
                user.getEmail()
        );
    }

    public List<UserDto> toUserDto(List<User> users) {
        return users.stream()
                .map(this::toUserDto)
                .collect(Collectors.toList());
    }
}
