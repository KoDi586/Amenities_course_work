package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import com.example.JavaServerPart.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaterialRepository extends JpaRepository<Material, Long> {
    List<Material> findAllByWarehouseId(Long warehouseId);
}
