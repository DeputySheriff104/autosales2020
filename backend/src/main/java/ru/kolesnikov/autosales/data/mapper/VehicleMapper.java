package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.VehicleDto;
import ru.kolesnikov.autosales.data.entity.Vehicle;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class VehicleMapper {

    public VehicleDto toVehicleDto(Vehicle vehicle) {
        return new VehicleDto(
                vehicle.getId(),
                new ColorMapper().toColorDto(vehicle.getColor()),
                new ModelMapper().toModelDto(vehicle.getModel()),
                new BodyTypeMapper().toBodyTypeDto(vehicle.getBodytype()),
                new EngineMapper().toEngineDto(vehicle.getEngine()),
                new RegionMapper().toRegionDto(vehicle.getRegion()),
                vehicle.getMileage(),
                vehicle.getYear()
        );
    }

    public List<VehicleDto> toVehicleDto(List<Vehicle> vehicles) {
        return vehicles.stream()
                .map(this::toVehicleDto)
                .collect(Collectors.toList());
    }
}
