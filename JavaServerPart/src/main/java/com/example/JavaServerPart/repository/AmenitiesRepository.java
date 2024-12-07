package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AmenitiesRepository extends JpaRepository<Amenities, Long> {
}
