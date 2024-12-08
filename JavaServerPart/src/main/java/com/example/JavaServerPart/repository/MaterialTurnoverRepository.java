package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import com.example.JavaServerPart.model.MaterialTurnover;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaterialTurnoverRepository extends JpaRepository<MaterialTurnover, Long> {
    List<MaterialTurnover> findAllByType(String boughtMaterialMessage);
}
