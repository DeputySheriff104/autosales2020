package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.dto.ManufacturerStatisticsDto;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.entity.BodyType;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

public interface AdRepository extends PagingAndSortingRepository<Ad, Long>, JpaSpecificationExecutor<Ad> {

    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into ads (user_id, vehicle_id, description, price) " +
                            "values (:user_id, :vehicle_id, :description, :price)",
            nativeQuery = true)
    void create(
            @Param("user_id") Long userId,
            @Param("vehicle_id") Long vehicleId,
            @Param("description") String description,
            @Param("price") Double price);

    @Transactional
    @Modifying
    @Query(value =
            "update ads set " +
                    "user_id = :user_id," +
                    "vehicle_id = :vehicle_id," +
                    "description = :description," +
                    "price = :price " +
                    "where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                    @Param("user_id") Long userId,
                    @Param("vehicle_id") Long vehicleId,
                    @Param("description") String description,
                    @Param("price") Double price);

    List<Ad> findAll();

    @Query(value =
            "select manuf.name manufacturer, " +
                    "count(m) manufacturerAmount, " +
                    "min(price) minPrice, " +
                    "max(price) maxPrice, " +
                    "round(avg(price)) avgPrice, " +
                    "sum(mileage) milage " +
                    "FROM ads a " +
                    "JOIN vehicles v on a.vehicle_id = v.id " +
                    "JOIN models m on v.model_id = m.id " +
                    "JOIN manufacturers manuf on m.manufacturer_id = manuf.id " +
                    "GROUP BY manufacturer " +
                    "ORDER BY count(m)",
            nativeQuery = true)
    List<Object> getManufacturersAndMinMaxAveragePriceByCount();
}
