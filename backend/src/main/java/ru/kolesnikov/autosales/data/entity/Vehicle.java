package ru.kolesnikov.autosales.data.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "vehicles", schema = "public")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="color_id")
    private Color color;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="model_id")
    private Model model;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="bodytype_id")
    private BodyType bodytype;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="engine_id")
    private Engine engine;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="region_id")
    private Region region;

    private Integer mileage;
    private Integer year;

}
