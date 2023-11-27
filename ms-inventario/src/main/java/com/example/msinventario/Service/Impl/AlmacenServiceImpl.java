package com.example.msinventario.Service.Impl;

import com.example.msinventario.Entity.Almacen;
import com.example.msinventario.Entity.AlmacenDetalle;
import com.example.msinventario.Repository.AlmacenRepository;
import com.example.msinventario.Service.AlmacenService;
import com.example.msinventario.dto.Producto;
import com.example.msinventario.dto.Proveedor;
import com.example.msinventario.feign.ProductoFeign;
import com.example.msinventario.feign.ProveedorFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AlmacenServiceImpl implements AlmacenService {

    @Autowired
    private AlmacenRepository almacenRepository;

    @Autowired
    private ProductoFeign productoFeign;

    @Autowired
    private ProveedorFeign proveedorFeign;
    @Override
    public List<Almacen> listar() {
        return almacenRepository.findAll();
    }

    @Override
    public Almacen guardar(Almacen almacen) {
        return almacenRepository.save(almacen);
    }

    @Override
    public Almacen actualizar(Almacen almacen) {
        return almacenRepository.save(almacen);
    }

    @Override
    public Optional<Almacen> listarPorId(Integer id) {

        Almacen almacen = almacenRepository.findById(id).get();
        Proveedor proveedor = proveedorFeign.listById(almacen.getProveedorId()).getBody();
        List<AlmacenDetalle> almacenDetalles = almacen.getAlmacenDetalle().stream().map(almacenDetalle -> {
            Producto producto = productoFeign.listById(almacenDetalle.getProdutoId()).getBody();
            almacenDetalle.setProducto(producto);
            return almacenDetalle;
        }).collect(Collectors.toList());
        almacen.setAlmacenDetalle(almacenDetalles);
        almacen.setProveedor(proveedor);
        return Optional.of(almacen);
    }
    @Override
    public void eliminarPorId(Integer id) {
        almacenRepository.deleteById(id);
    }
}
