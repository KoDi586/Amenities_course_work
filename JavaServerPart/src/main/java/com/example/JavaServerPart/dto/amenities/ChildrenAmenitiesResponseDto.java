package com.example.JavaServerPart.dto.amenities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChildrenAmenitiesResponseDto {

    private Long amenities_id;
    private String name;
    private String description;
    private String type;
    private String[] materials_names;
    private String[] products_names;
    private Integer price;

}
