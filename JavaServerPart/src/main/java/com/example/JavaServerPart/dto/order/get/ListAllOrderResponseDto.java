package com.example.JavaServerPart.dto.order.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListAllOrderResponseDto {
    private List<ChildrenAllOrderResponseDto> children;
}
