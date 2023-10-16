package com.example.mscarrito.service;


import com.example.mscarrito.entity.CarritoItem;
import com.example.mscarrito.repository.CarritoRepository;

import java.util.List;
import java.util.Optional;

public interface CarritoService {


    public List<CarritoItem> obtenerTodosLosItems();
    public CarritoItem agregarItemAlCarrito (CarritoItem item);
    public  CarritoItem vaciarCarrito (CarritoItem item);
    public Optional<CarritoItem>ListarPorId(Integer id);
    public void vaciarCarrito(Integer id);

}
