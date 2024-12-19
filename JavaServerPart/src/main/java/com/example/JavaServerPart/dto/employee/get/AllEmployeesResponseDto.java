package com.example.JavaServerPart.dto.employee.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllEmployeesResponseDto {

    private List<ChildrenEmployeeResponseDto> children;

}
