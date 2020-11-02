package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.entity.Region;
import ru.kolesnikov.autosales.data.entity.UserType;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserTypeMapper {

    public ReferenceDataDto toUserTypeDto(UserType userType) {
        return new ReferenceDataDto(
                userType.getId(),
                userType.getName()
        );
    }

    public List<ReferenceDataDto> toUserTypeDto(List<UserType> userTypes) {
        return userTypes.stream()
                .map(this::toUserTypeDto)
                .collect(Collectors.toList());
    }
}
