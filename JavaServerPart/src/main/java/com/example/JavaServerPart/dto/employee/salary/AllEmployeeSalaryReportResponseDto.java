package com.example.JavaServerPart.dto.employee.salary;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllEmployeeSalaryReportResponseDto {

    private List<ChildrenEmployeeSalaryReportResponseDto> children;

}
