package com.example.msfactura.dto;

import lombok.Data;

@Data
public class Pago {
    private Integer id;

    private String nombre;

    private String descripcion;

    private double Monto;
}

