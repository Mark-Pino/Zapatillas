package com.example.producto.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.producto.dto.Categoria;
import com.example.producto.entity.Producto;
import com.example.producto.feign.CategoriaFeign;
import com.example.producto.repository.ProductoRepository;
import com.example.producto.service.ProductoService;

@Service
public class ProductoServiceImpl implements ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private CategoriaFeign categoriaFeign;

    @Override
    public List<Producto> listar() {
        return productoRepository.findAll();
    }

    @Override
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto actualizar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Optional<Producto> listarPorId(Integer id) {
        // obtener del producto su id
        Producto producto = productoRepository.findById(id).get();
        if (producto != null) {
            System.out.println("Antes de la petición");
            // Obtención de la categoria asociado al producto
            Categoria categoria = categoriaFeign.listById(producto.getCategoriaId()).getBody();
            System.out.println("Después de la petición");
            System.out.println(categoria.toString());
            System.out.println(categoria.getTitulo());
            producto.setCategoria(categoria);
        }

        return Optional.ofNullable(producto);
    }

    @Override
    public void eliminarPorId(Integer id) {
        productoRepository.deleteById(id);
    }
}
