package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "amenities")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Amenities {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    @Column(name = "\"type\"")
    private Boolean type;
    private Integer[] materials;
    private Integer[] products;
    private Integer price;

}
