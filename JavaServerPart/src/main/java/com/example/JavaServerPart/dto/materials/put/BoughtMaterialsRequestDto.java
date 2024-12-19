package com.example.JavaServerPart.dto.materials.put;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoughtMaterialsRequestDto {

    private Long material_id;
    private Integer count_of_bought;

}
