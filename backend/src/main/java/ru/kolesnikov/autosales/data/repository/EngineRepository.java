package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.entity.BodyType;
import ru.kolesnikov.autosales.data.entity.Engine;

import javax.transaction.Transactional;
import java.util.List;

public interface EngineRepository extends PagingAndSortingRepository<Engine, Long> {

    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into engines (type_id, horsepower, displacement, power) " +
                            "values (:type_id, :horsepower, :displacement, :power)",
            nativeQuery = true)
    void create(
            @Param("type_id") Long typeId,
            @Param("horsepower") Double horsepower,
            @Param("displacement") Double displacement,
            @Param("power") Double power);

    @Transactional
    @Modifying
    @Query(value =
            "update engines set " +
                    "type_id = :type_id," +
                    "horsepower = :horsepower," +
                    "displacement = :displacement," +
                    "power = :power " +
                    "where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                    @Param("type_id") Long typeId,
                    @Param("horsepower") Double horsepower,
                    @Param("displacement") Double displacement,
                    @Param("power") Double power);

    List<Engine> findAll();

    void deleteById(Long id);
}
