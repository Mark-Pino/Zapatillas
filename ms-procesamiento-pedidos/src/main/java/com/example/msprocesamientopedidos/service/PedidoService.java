package com.example.msprocesamientopedidos.service;

import com.example.msprocesamientopedidos.entity.Pedido;

import java.util.List;
import java.util.Optional;

public interface PedidoService {
    public List<Pedido> listar();

    public Pedido guardar(Pedido pedido);

    public Pedido actualizar(Pedido pedido);

    public Optional<Pedido> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
