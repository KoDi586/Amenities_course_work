package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import com.example.JavaServerPart.model.MaterialTurnover;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialTurnoverRepository extends JpaRepository<MaterialTurnover, Long> {
}
