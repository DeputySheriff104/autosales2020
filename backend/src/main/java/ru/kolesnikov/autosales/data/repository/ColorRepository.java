package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.Color;

import javax.transaction.Transactional;
import java.util.List;

public interface ColorRepository extends PagingAndSortingRepository<Color, Long> {

    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into colors (name) " +
                            "values (:name)",
            nativeQuery = true)
    void create(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value =
            "update colors set name = :name where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                                    @Param("name") String name);

    List<Color> findAll();

    void deleteById(Long id);
}
