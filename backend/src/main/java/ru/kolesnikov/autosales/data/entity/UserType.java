package ru.kolesnikov.autosales.data.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "usertypes", schema = "public")
public class UserType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    protected String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserType usertype = (UserType) o;
        return Objects.equals(id, usertype.id) &&
                Objects.equals(name, usertype.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
