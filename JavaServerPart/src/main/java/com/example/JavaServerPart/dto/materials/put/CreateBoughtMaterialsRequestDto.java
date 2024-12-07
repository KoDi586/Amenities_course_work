package com.example.JavaServerPart.dto.materials.put;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateBoughtMaterialsRequestDto {

    private Long warehouse_id;
    private List<BoughtMaterialsRequestDto> bought_materials;
}
