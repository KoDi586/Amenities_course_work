package com.example.JavaServerPart.dto.report.order_master_materials;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenOrderMasterAndMaterialsResponseDto {

    private Long order_id;
    private String employee_total_name;
    private List<String> materials;

}
