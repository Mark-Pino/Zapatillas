package com.example.mscarrito.repository;

import com.example.mscarrito.entity.CarritoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarritoRepository extends JpaRepository<CarritoItem, Long> {
}
