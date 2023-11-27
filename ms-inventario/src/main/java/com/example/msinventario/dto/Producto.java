package com.example.msinventario.dto;

import lombok.Data;

@Data
public class Producto {
    private Integer id;

    private String nombre;

    private Proveedor proveedor;
}
