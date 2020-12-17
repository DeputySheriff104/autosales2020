package ru.kolesnikov.autosales.data.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import ru.kolesnikov.autosales.data.entity.Engine;
import ru.kolesnikov.autosales.data.entity.User;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {

    @Transactional
    @Modifying
    @Query(
            value =
                    "insert into users (type_id, first_name, last_name, phone, email, username, password) " +
                            "values (:type_id, :first_name, :last_name, :phone, :email, :username, :password)",
            nativeQuery = true)
    void create(
            @Param("type_id") Long typeId,
            @Param("first_name") String firstName,
            @Param("last_name") String lastName,
            @Param("phone") String phone,
            @Param("email") String email,
            @Param("username") String username,
            @Param("password") String password);

    @Transactional
    @Modifying
    @Query(value =
            "update users set " +
                    "type_id = :type_id," +
                    "first_name = :first_name," +
                    "last_name = :last_name," +
                    "phone = :phone," +
                    "email = :email," +
                    "username = :username," +
                    "password = :password " +
                    "where id = :id",
            nativeQuery = true)
    void updateById(@Param("id") Long id,
                    @Param("type_id") Long typeId,
                    @Param("first_name") String firstName,
                    @Param("last_name") String lastName,
                    @Param("phone") String phone,
                    @Param("email") String email,
                    @Param("username") String username,
                    @Param("password") String password);

    List<User> findAll();

    void deleteById(Long id);
}
