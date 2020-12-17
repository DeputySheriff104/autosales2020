package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.Engine;
import ru.kolesnikov.autosales.data.entity.Vehicle;

import javax.transaction.Transactional;
import java.util.List;

public interface VehicleRepository extends PagingAndSortingRepository<Vehicle, Long> {

    /*@Transactional
    @Modifying
    @Query(
            value =
                    "insert into vehicles (color_id, model_id, bodytype_id, engine_id, region_id, mileage, year) " +
                            "values (:color_id, :model_id, :bodytype_id, :engine_id, :region_id, :mileage, :year)",
            nativeQuery = true)
    void create(
            @Param("color_id") Long colorId,
            @Param("model_id") Long modelId,
            @Param("bodytype_id") Long bodytypeId,
            @Param("engine_id") Long engineId,
            @Param("region_id") Long regionId,
            @Param("mileage") Integer mileage,
            @Param("year") Integer year);*/

    @Transactional
    @Modifying
    @Query(value =
            "update vehicles set " +
                    "color_id = :color_id," +
                    "model_id = :model_id," +
                    "bodytype_id = :bodytype_id," +
                    "engine_id = :engine_id," +
                    "region_id = :region_id," +
                    "mileage = :mileage," +
                    "year = :year " +
                    "where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                    @Param("color_id") Long colorId,
                    @Param("model_id") Long modelId,
                    @Param("bodytype_id") Long bodytypeId,
                    @Param("engine_id") Long engineId,
                    @Param("region_id") Long regionId,
                    @Param("mileage") Integer mileage,
                    @Param("year") Integer year);

    List<Vehicle> findAll();

    void deleteById(Long id);
}
