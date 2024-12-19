package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "\"order\"")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "client_id")
    private Long clientId;
    @Column(name = "amenities_ids")
    private List<Integer> amenitiesIds;

    private String status;
    @Column(name = "employee_id")
    private Long employeeId;
    @Column(name = "date_of_payed")
    private String dateOfPayed;
    @Column(name = "date_of_finish")
    private String dateOfFinish;

    @Column(name = "total_price")
    private Integer totalPrice;
}
