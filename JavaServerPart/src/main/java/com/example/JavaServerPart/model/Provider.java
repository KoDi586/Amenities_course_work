package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "provider")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Provider {

    @Id
    private Long id;
    private String name;
    @Column(name = "contact_info")
    private String contactInfo;
    @Column(name = "material_id")
    private Long materialId;
}
