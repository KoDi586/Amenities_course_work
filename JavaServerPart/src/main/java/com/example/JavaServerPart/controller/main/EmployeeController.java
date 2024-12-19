package com.example.JavaServerPart.controller.main;

import com.example.JavaServerPart.dto.employee.get.AllEmployeesResponseDto;
import com.example.JavaServerPart.dto.employee.salary.AllEmployeeSalaryReportResponseDto;
import com.example.JavaServerPart.service.AmenitiesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/employee")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    private final AmenitiesService service;

    @GetMapping("/all")
    public ResponseEntity<AllEmployeesResponseDto> getAllEmployee() {
        return ResponseEntity.ok(service.getAllEmployee());
    }

    @GetMapping("/report-by-salary")
    public ResponseEntity<AllEmployeeSalaryReportResponseDto> getReportByEmployeeSalary() {
        return ResponseEntity.ok(service.getReportByEmployeeSalary());
    }
}
