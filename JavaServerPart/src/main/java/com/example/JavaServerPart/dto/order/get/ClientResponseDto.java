package com.example.JavaServerPart.dto.order.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientResponseDto {

    private String name;
    private String second_name;
    private String email;
    private String phone;
    private String card;

}
