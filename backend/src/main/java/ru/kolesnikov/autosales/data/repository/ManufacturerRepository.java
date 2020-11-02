package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.Manufacturer;

import javax.transaction.Transactional;
import java.util.List;

public interface ManufacturerRepository extends PagingAndSortingRepository<Manufacturer, Long> {

    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into manufacturers (name) " +
                            "values (:name)",
            nativeQuery = true)
    void create(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value =
            "update manufacturers set name = :name where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                    @Param("name") String name);

    List<Manufacturer> findAll();

    void deleteById(Long id);
}
