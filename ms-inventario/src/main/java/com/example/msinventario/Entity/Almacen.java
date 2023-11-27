package com.example.msinventario.Entity;

import com.example.msinventario.dto.Proveedor;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;


@Entity
@Data
public class Almacen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    private String nombre;

    private String descripcion;

    private String codigo;

    private Integer proveedorId;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "almacen_id")
    private List<AlmacenDetalle> almacenDetalle;
    @Transient
    private Proveedor proveedor;

}
