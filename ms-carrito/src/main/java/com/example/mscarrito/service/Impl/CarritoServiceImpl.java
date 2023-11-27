package com.example.mscarrito.service.Impl;

import com.example.mscarrito.entity.CarritoItem;
import com.example.mscarrito.repository.CarritoRepository;
import com.example.mscarrito.service.CarritoService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.security.PrivateKey;
import java.lang.Integer;
import java.util.List;
import java.util.Optional;
@Service
public class CarritoServiceImpl implements CarritoService {

    @Autowired
    private CarritoRepository carritoRepository;
    @Override
    public List<CarritoItem> obtenerTodosLosItems() {
        return carritoRepository.findAll();
    }

    @Override
    public CarritoItem agregarItemAlCarrito(CarritoItem item) {
        return carritoRepository.save(item);
    }

    @Override
    public Optional<CarritoItem> ListarPorId(Integer id) {
        return carritoRepository.findById(Long.valueOf(id));
    }

    @Override
    public void vaciarCarrito(Integer id) {
        carritoRepository.deleteById(Long.valueOf(id));
    }

    @Override
    public CarritoItem vaciarCarrito(CarritoItem item) {
        carritoRepository.delete(item);
        return item;
    }
}
