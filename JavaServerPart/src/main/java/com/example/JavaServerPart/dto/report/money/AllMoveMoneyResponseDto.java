package com.example.JavaServerPart.dto.report.money;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllMoveMoneyResponseDto {

    List<ChildrenMoveMoneyResponseDto> children;

}
