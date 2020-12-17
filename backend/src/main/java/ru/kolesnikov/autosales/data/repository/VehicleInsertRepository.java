package ru.kolesnikov.autosales.data.repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.kolesnikov.autosales.data.dto.simple.SimpleEngineDto;
import ru.kolesnikov.autosales.data.entity.Vehicle;
import ru.kolesnikov.autosales.data.entity.VehicleInsertEntity;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class VehicleInsertRepository {

    @PersistenceContext
    EntityManager em;

    @Transactional()
    public Long insert(VehicleInsertEntity vehicleInsertEntity) {
        em.persist(vehicleInsertEntity);
        em.flush();
        return vehicleInsertEntity.getId();
    }
}
