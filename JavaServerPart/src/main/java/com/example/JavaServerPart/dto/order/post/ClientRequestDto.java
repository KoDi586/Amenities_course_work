package com.example.JavaServerPart.dto.order.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientRequestDto {

    private String name;
    private String second_name;
    private String email;
    private String phone;
    private String card;

}
