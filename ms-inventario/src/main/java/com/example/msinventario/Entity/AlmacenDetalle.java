package com.example.msinventario.Entity;


import com.example.msinventario.dto.Producto;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class AlmacenDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    private String categoria;

    private Double stock;

    private Double precio;

    private Integer produtoId;

    @Transient
    private Producto producto;

    public AlmacenDetalle(){
        this.stock = (double) 0;
        this.precio = (double) 0;
    }

}
