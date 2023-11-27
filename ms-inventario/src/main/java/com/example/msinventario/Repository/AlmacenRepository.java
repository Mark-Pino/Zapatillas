package com.example.msinventario.Repository;

import com.example.msinventario.Entity.Almacen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlmacenRepository extends JpaRepository<Almacen, Integer> {
}
