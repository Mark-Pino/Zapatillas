package com.example.msproveedor.Service.Impl;


import com.example.msproveedor.Entity.Proveedor;
import com.example.msproveedor.Repository.ProveedorRespository;
import com.example.msproveedor.Service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProveedorServiceImpl implements ProveedorService  {

    @Autowired
    private ProveedorRespository proveedorRespository;

    @Override
    public List<Proveedor> listar() {
        return proveedorRespository.findAll();
    }

    @Override
    public Proveedor guardar(Proveedor proveedor) {
        return proveedorRespository.save(proveedor);
    }

    @Override
    public Proveedor actualizar(Proveedor proveedor) {
        return proveedorRespository.save(proveedor);
    }

    @Override
    public Optional<Proveedor> listarPorId(Integer id) {
        return proveedorRespository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        proveedorRespository.deleteById(id);
    }
}
