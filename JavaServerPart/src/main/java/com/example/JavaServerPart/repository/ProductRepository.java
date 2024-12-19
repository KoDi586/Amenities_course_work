package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import com.example.JavaServerPart.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
