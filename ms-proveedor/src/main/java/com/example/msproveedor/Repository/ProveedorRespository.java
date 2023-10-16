package com.example.msproveedor.Repository;

import com.example.msproveedor.Entity.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProveedorRespository extends JpaRepository<Proveedor, Integer> {
}
