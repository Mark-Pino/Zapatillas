package com.example.msprocesamientopedidos.repository;

import com.example.msprocesamientopedidos.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
}
