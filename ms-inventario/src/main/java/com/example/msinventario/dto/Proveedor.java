package com.example.msinventario.dto;

import lombok.Data;

@Data
public class Proveedor {

    private Integer id;

    private String nombre;

    private String estado;

    private String direccion;

    private String telefono;
}
