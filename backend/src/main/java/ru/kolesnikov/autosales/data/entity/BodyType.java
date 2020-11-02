package ru.kolesnikov.autosales.data.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "bodytypes", schema = "public")
public class BodyType {

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
        BodyType bodyType = (BodyType) o;
        return Objects.equals(id, bodyType.id) &&
                Objects.equals(name, bodyType.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
