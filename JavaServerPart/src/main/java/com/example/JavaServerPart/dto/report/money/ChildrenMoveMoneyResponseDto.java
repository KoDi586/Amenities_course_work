package com.example.JavaServerPart.dto.report.money;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenMoveMoneyResponseDto {

    private String thing;  // материал нейм или продукт нейм
    private String person;  // поставщик или клиент
    private Integer price;
    private String type;  // потрачено или заработано

}
