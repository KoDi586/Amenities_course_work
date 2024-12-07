package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.Amenities;
import com.example.JavaServerPart.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
