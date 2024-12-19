package com.example.JavaServerPart.controller.report;

import com.example.JavaServerPart.dto.report.money.AllMoveMoneyResponseDto;
import com.example.JavaServerPart.dto.report.order_master_materials.AllOrderMasterAndMaterialsResponseDto;
import com.example.JavaServerPart.service.AmenitiesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/report")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {

    private final AmenitiesService service;

    @GetMapping("/order-master-materials")
    public ResponseEntity<AllOrderMasterAndMaterialsResponseDto> getAllOrderMasterAndMaterialsResponseDto() {
        return ResponseEntity.ok(service.getAllOrderMasterAndMaterialsResponseDto());
    }


    @GetMapping("/move-money")
    public ResponseEntity<AllMoveMoneyResponseDto> getReportByMoveMoney() {
        return ResponseEntity.ok(service.getReportByMoveMoney());
    }

}
