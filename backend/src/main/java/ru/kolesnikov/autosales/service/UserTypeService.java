package ru.kolesnikov.autosales.service;

import org.springframework.stereotype.Service;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataToCreateAndUpdateDto;
import ru.kolesnikov.autosales.data.entity.Manufacturer;
import ru.kolesnikov.autosales.data.entity.UserType;
import ru.kolesnikov.autosales.data.repository.UserTypeRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserTypeService {

    private final UserTypeRepository userTypeRepository;

    public UserTypeService(UserTypeRepository userTypeRepository) {
        this.userTypeRepository = userTypeRepository;
    }

    public void create(ReferenceDataDto referenceDataDto) {
        userTypeRepository.create(referenceDataDto.getName());
    }

    public void updateById(Long id, ReferenceDataDto referenceDataDto) {
        userTypeRepository.updateById(id, referenceDataDto.getName());
    }

    public List<UserType> getAll() {
        return new ArrayList<>(userTypeRepository.findAll());
    }

    public void deleteById(Long id) {
        userTypeRepository.deleteById(id);
    }
}
