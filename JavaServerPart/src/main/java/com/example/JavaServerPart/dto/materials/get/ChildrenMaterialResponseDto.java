package com.example.JavaServerPart.dto.materials.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenMaterialResponseDto {

    private Long material_id;
    private String name;
    private Long warehouse_id;
    private Integer count_in_warehouse;


}

