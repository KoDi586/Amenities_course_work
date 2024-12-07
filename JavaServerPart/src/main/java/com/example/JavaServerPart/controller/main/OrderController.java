package com.example.JavaServerPart.controller.main;

import com.example.JavaServerPart.dto.order.get.ListAllOrderResponseDto;
import com.example.JavaServerPart.dto.order.post.CreateOrderRequestDto;
import com.example.JavaServerPart.service.AmenitiesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final AmenitiesService service;

    @PostMapping
    public ResponseEntity<Void> postOrder(@RequestBody CreateOrderRequestDto createOrderRequestDto) {
        log.info("order controller method postOrder entity: {}", createOrderRequestDto);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/pay")
    public ResponseEntity<Void> putPayOrder(@RequestParam Long order_id) {
        log.info("order controller method putPayOrder param: {}", order_id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/finish")
    public ResponseEntity<Void> putFinishOrder(@RequestParam Long order_id) {
        log.info("order controller method putFinishOrder param: {}", order_id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/no-pay")
    public ResponseEntity<ListAllOrderResponseDto> getNoPayOrder() {
        return ResponseEntity.ok(service.getNoPayOrder());
    }

    @GetMapping("/no-finish")
    public ResponseEntity<ListAllOrderResponseDto> getNoFinishOrder() {
        return ResponseEntity.ok(service.getNoFinishOrder());
    }

    @GetMapping("/finish")
    public ResponseEntity<ListAllOrderResponseDto> getFinishOrder() {
        return ResponseEntity.ok(service.getFinishOrder());
    }
}
