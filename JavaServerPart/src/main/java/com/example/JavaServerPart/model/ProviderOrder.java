package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "provider_order")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProviderOrder {

    @Id
    private Long id;
    @Column(name = "material_id")
    private Long materialId;
    private String status;
    @Column(name = "date_of_receive")
    private String dateOfReceive;
    @Column(name = "total_price")
    private Integer totalPrice;
}
