package com.example.JavaServerPart.controller.main;

import com.example.JavaServerPart.dto.materials.get.AllMaterialsResponseDto;
import com.example.JavaServerPart.dto.materials.put.CreateBoughtMaterialsRequestDto;
import com.example.JavaServerPart.service.AmenitiesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/material")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class MaterialController {

    private final AmenitiesService service;


    @GetMapping("/all")
    public ResponseEntity<AllMaterialsResponseDto> getAllWithoutParams() {
        log.info("material controller method getAllWithoutParams");
        return ResponseEntity.ok(service.getAllWithoutParams());
    }

    @GetMapping("/all-by-warehouse")
    public ResponseEntity<AllMaterialsResponseDto> getAllByWarehouseId(@RequestParam Long warehouse_id) {
        log.info("material controller method getAllByWarehouseId param: {}", warehouse_id);
        return ResponseEntity.ok(service.getAllByWarehouseId(warehouse_id));
    }

    @PutMapping("/bought-from-provider")
    public ResponseEntity<Void> createBoughtMaterialsFromRandomProvider(@RequestBody CreateBoughtMaterialsRequestDto dto) {
        log.info("material controller method put. entity = {}", dto.toString());
        service.createBoughtMaterialsFromRandomProvider(dto);
        return ResponseEntity.ok().build();
    }
}
