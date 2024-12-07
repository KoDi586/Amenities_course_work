package com.example.JavaServerPart.dto.employee.salary;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenEmployeeSalaryReportResponseDto {

    private Long employee_id;
    private String total_name;
    private String position;
    private Integer salary;
    private Integer count_finish_work;
    private Integer NDFL_percent;
    private Integer total_salary;
    private Integer last_finish_salary;

}
