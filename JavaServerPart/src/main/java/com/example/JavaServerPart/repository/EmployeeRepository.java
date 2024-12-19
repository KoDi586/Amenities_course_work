package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import com.example.JavaServerPart.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
