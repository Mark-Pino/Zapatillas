package com.example.producto.entity;

import java.time.LocalDateTime;

import com.example.producto.dto.Categoria;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Data;

@Entity
@Data
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String costo;
    private Integer categoriaId;
    private String tasaIGV;
    private String descripcion;
    private String codigoBarras;
    private String cantidadStock;
    private String disponible;
    private String proveedor;
    @Transient
    private Categoria categoria;

    /*public Producto() {
        this.costo = (double) 0;
    }*/
}
