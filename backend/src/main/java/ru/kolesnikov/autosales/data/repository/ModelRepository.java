package ru.kolesnikov.autosales.data.repository;

import org.dom4j.rule.Mode;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.Engine;
import ru.kolesnikov.autosales.data.entity.Model;

import javax.transaction.Transactional;
import java.util.List;

public interface ModelRepository extends PagingAndSortingRepository<Model, Long> {

    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into models (manufacturer_id, name) " +
                            "values (:manufacturer_id, :name)",
            nativeQuery = true)
    void create(
            @Param("manufacturer_id") Long manufacturerId,
            @Param("name") String name);

    @Transactional
    @Modifying
    @Query(value =
            "update models set " +
                    "manufacturer_id = :manufacturer_id," +
                    "name = :name " +
                    "where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                    @Param("manufacturer_id") Long manufacturerId,
                    @Param("name") String name);

    List<Model> findAll();

    void deleteById(Long id);

    List<Model> findAllByManufacturer_Name(String manufacturerName);
}
