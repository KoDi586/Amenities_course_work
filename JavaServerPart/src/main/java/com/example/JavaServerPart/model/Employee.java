package com.example.JavaServerPart.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employee")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "total_name")
    private String totalName;
    private Integer salary;
    @Column(name = "contact_info")
    private String contactInfo;
    private String position;
    @Column(name = "count_finish")
    private Integer countFinish;
}
