package com.example.JavaServerPart.controller.main;

import com.example.JavaServerPart.dto.amenities.AllAmenitiesResponseDto;
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
@RequestMapping("/api/amenities")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class AmenitiesController {

    private final AmenitiesService service;

    @GetMapping("/all")
    public ResponseEntity<AllAmenitiesResponseDto> getAllEmployee() {
        return ResponseEntity.ok(service.getAllAmenities());
    }

}
