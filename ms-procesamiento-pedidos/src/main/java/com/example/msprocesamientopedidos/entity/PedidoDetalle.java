package com.example.msprocesamientopedidos.entity;

import com.example.msprocesamientopedidos.dto.Producto;
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
    @Transient
    private Producto producto;
    public PedidoDetalle() {
        this.cantidad = (double) 0;
        this.precio = (double) 0;
    }
}
