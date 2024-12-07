package com.example.JavaServerPart.controller.main;

import com.example.JavaServerPart.dto.provider.AllProviderResponseDto;
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
@RequestMapping("/api/provider")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class ProviderController {

    private final AmenitiesService service;

    @GetMapping("/all")
    public ResponseEntity<AllProviderResponseDto> getAllProvider() {
        return ResponseEntity.ok(service.getAllProvider());
    }

}
