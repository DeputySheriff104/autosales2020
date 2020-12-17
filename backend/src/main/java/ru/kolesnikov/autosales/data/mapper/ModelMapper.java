package ru.kolesnikov.autosales.data.mapper;

import org.springframework.stereotype.Component;
import ru.kolesnikov.autosales.data.dto.ModelDto;
import ru.kolesnikov.autosales.data.entity.Model;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ModelMapper {

    public ModelDto toModelDto(Model model) {
        return new ModelDto(
                model.getId(),
                new ManufacturerMapper().toManufacturerDto(model.getManufacturer()),
                model.getName()
        );
    }

    public List<ModelDto> toModelDto(List<Model> models) {
        return models.stream()
                .map(this::toModelDto)
                .collect(Collectors.toList());
    }
}
