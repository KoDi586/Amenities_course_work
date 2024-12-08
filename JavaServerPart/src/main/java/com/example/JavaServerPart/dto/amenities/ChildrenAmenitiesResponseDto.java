package com.example.JavaServerPart.dto.amenities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChildrenAmenitiesResponseDto {

    private Long amenities_id;
    private String name;
    private String description;
    private String type;
    private List<String> materials_names;
    private List<String> products_names;
    private Integer price;

}
