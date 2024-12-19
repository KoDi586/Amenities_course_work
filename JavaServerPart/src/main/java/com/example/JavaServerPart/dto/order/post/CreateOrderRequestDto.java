package com.example.JavaServerPart.dto.order.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateOrderRequestDto {

    private ClientRequestDto client;
    private String[] amenities_names;
//    private String employee_name;

}
