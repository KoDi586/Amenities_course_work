package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "materials_turnover")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MaterialTurnover {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "material_id")
    private Long materialId;
    private Integer count;
    @Column(name = "type", nullable = false)
    private String type;
}
