package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AmenitiesRepository extends JpaRepository<Amenities, Long> {
    Amenities findByTitle(String amenitiesName);
}
