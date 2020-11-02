package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.BodyType;

import javax.transaction.Transactional;
import java.util.List;

public interface BodyTypeRepository extends PagingAndSortingRepository<BodyType, Long> {


    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into bodytypes (name) " +
                            "values (:name)",
            nativeQuery = true)
    void create(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value =
            "update bodytypes set name = :name where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                                   @Param("name") String name);

    List<BodyType> findAll();

    void deleteById(Long id);
}
