package com.example.msinventario.Service;

import com.example.msinventario.Entity.Almacen;

import java.util.List;
import java.util.Optional;
public interface AlmacenService {
    public List<Almacen> listar();

    public Almacen guardar(Almacen almacen);

    public Almacen actualizar(Almacen almacen);

    public Optional<Almacen> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
