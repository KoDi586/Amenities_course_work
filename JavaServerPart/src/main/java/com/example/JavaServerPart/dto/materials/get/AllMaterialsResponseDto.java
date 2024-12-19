package com.example.JavaServerPart.dto.materials.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllMaterialsResponseDto {
    List<ChildrenMaterialResponseDto> children;
}
