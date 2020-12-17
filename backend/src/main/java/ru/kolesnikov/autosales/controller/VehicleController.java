package ru.kolesnikov.autosales.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.VehicleDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleAdDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleModelDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleVehicleDto;
import ru.kolesnikov.autosales.data.mapper.AdMapper;
import ru.kolesnikov.autosales.data.mapper.VehicleMapper;
import ru.kolesnikov.autosales.service.AdService;
import ru.kolesnikov.autosales.service.VehicleService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping(path = "/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;
    private final VehicleMapper vehicleMapper;

    public VehicleController(
            VehicleService vehicleService,
            VehicleMapper vehicleMapper) {
        this.vehicleService = vehicleService;
        this.vehicleMapper = vehicleMapper;
    }

    @RequestMapping(method = POST, path = "")
    public Long create(@RequestBody SimpleVehicleDto simpleVehicleDto) {
        return vehicleService.insert(simpleVehicleDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody SimpleVehicleDto simpleVehicleDto) {
        vehicleService.updateById(id, simpleVehicleDto);
    }

    @RequestMapping(method = GET, path = "")
    public List<VehicleDto> getAll() {
        return vehicleMapper.toVehicleDto(vehicleService.getAll());
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        vehicleService.deleteById(id);
    }
}
