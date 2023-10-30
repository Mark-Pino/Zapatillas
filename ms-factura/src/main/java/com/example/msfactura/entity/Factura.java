package com.example.msfactura.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Factura {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String cliente;
    private double monto;
}
