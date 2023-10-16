package com.example.msprocesamientopedidos.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PedidoDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double cantidad;
    private Double precio;
    private Integer productoId;
}
