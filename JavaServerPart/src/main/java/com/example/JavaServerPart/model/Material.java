package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "material")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Material {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private Integer price;
    @Column(name = "warehouse_id")
    private Long warehouseId;
    @Column(name = "count_in_warehouse")
    private Integer countOfWarehouse;
}
