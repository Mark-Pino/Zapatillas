package com.example.msproveedor.Service;

import com.example.msproveedor.Entity.Proveedor;

import java.util.List;
import java.util.Optional;

public interface ProveedorService {
    public List<Proveedor> listar();

    public Proveedor guardar(Proveedor proveedor);

    public Proveedor actualizar(Proveedor proveedor);

    public Optional<Proveedor> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
