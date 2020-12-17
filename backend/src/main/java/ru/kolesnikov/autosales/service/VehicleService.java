package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.simple.SimpleVehicleDto;
import ru.kolesnikov.autosales.data.entity.Vehicle;
import ru.kolesnikov.autosales.data.entity.VehicleInsertEntity;
import ru.kolesnikov.autosales.data.repository.VehicleInsertRepository;
import ru.kolesnikov.autosales.data.repository.VehicleRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final VehicleInsertRepository vehicleInsertRepository;

    public VehicleService(VehicleRepository vehicleRepository, VehicleInsertRepository vehicleInsertRepository) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleInsertRepository = vehicleInsertRepository;
    }

    /*public void create(SimpleVehicleDto simpleVehicleDto) {
        vehicleRepository.create(
                simpleVehicleDto.getColorId(),
                simpleVehicleDto.getModelId(),
                simpleVehicleDto.getBodytypeId(),
                simpleVehicleDto.getEngineId(),
                simpleVehicleDto.getRegionId(),
                simpleVehicleDto.getMileage(),
                simpleVehicleDto.getYear());
    }*/

    public Long insert(SimpleVehicleDto simpleVehicleDto) {
        return vehicleInsertRepository.insert(new VehicleInsertEntity(
                simpleVehicleDto.getColorId(),
                simpleVehicleDto.getModelId(),
                simpleVehicleDto.getBodytypeId(),
                simpleVehicleDto.getEngineId(),
                simpleVehicleDto.getRegionId(),
                simpleVehicleDto.getMileage(),
                simpleVehicleDto.getYear()));
    }

    public void updateById(Long id, SimpleVehicleDto simpleVehicleDto) {
        vehicleRepository.updateById(
                id,
                simpleVehicleDto.getColorId(),
                simpleVehicleDto.getModelId(),
                simpleVehicleDto.getBodytypeId(),
                simpleVehicleDto.getEngineId(),
                simpleVehicleDto.getRegionId(),
                simpleVehicleDto.getMileage(),
                simpleVehicleDto.getYear());
    }

    public List<Vehicle> getAll() {
        return new ArrayList<>(vehicleRepository.findAll());
    }

    public void deleteById(Long id) {
        vehicleRepository.deleteById(id);
    }
}
