package com.example.JavaServerPart.dto.amenities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllAmenitiesResponseDto {

    private List<ChildrenAmenitiesResponseDto> children;

}
