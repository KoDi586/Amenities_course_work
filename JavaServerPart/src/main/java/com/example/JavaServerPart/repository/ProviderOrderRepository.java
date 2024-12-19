package com.example.JavaServerPart.repository;

import com.example.JavaServerPart.model.ProviderOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderOrderRepository extends JpaRepository<ProviderOrder, Long> {
}
