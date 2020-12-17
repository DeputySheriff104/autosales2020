package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.UserDto;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.entity.BodyType;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AdMapper {

    public AdDto toAdDto(Ad ad) {
        return new AdDto(
                ad.getId(),
                new UserMapper().toUserDto(ad.getUser()),
                new VehicleMapper().toVehicleDto(ad.getVehicle()),
                ad.getDescription(),
                ad.getPrice(),
                ad.getDate()
        );
    }

    public List<AdDto> toAdDto(List<Ad> ads) {
        return ads.stream()
                .map(this::toAdDto)
                .collect(Collectors.toList());
    }
}
