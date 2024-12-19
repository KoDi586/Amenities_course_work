package com.example.JavaServerPart.dto.provider;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenProviderResponseDto {

    private Long id;
    private String name;
    private String contact_info;

}
