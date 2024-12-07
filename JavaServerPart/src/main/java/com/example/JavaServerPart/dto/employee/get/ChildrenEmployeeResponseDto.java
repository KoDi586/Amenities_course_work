package com.example.JavaServerPart.dto.employee.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChildrenEmployeeResponseDto {

    private Long employee_id;
    private String total_name;
    private String contact_info;
    private String position;
    private Integer salary;

}
