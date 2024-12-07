package com.example.JavaServerPart.dto.provider;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllProviderResponseDto {

    private List<ChildrenProviderResponseDto> children;

}
