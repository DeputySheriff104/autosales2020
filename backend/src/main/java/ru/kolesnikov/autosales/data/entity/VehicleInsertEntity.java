package ru.kolesnikov.autosales.data.entity;

import lombok.*;
import ru.kolesnikov.autosales.data.dto.EngineDto;
import ru.kolesnikov.autosales.data.dto.ModelDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "vehicles", schema = "public")
public class VehicleInsertEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "color_id")
    private Long colorId;

    @Column(name = "model_id")
    private Long modelId;

    @Column(name = "bodytype_id")
    private Long bodytypeId;

    @Column(name = "engine_id")
    private Long engineId;

    @Column(name = "region_id")
    private Long regionId;

    private Integer mileage;
    private Integer year;

    public VehicleInsertEntity(
            Long colorId,
            Long modelId,
            Long bodytypeId,
            Long engineId,
            Long regionId,
            Integer mileage,
            Integer year) {
        this.colorId = colorId;
        this.modelId = modelId;
        this.bodytypeId = bodytypeId;
        this.engineId = engineId;
        this.regionId = regionId;
        this.mileage = mileage;
        this.year = year;
    }
}
