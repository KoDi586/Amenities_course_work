package com.example.JavaServerPart.dto.order.get;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenAllOrderResponseDto {

    private Long order_id;
    private ClientResponseDto client;
    private String[] amenities_names;
    private String status;
    private String employee_total_name;
    private String date_of_payed;
    private String date_of_finished;
    private Integer total_price;

}
