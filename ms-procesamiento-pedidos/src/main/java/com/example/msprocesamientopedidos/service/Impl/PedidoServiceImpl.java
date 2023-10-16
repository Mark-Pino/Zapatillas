package com.example.msprocesamientopedidos.service.Impl;

import com.example.msprocesamientopedidos.entity.Pedido;
import com.example.msprocesamientopedidos.repository.PedidoRepository;
import com.example.msprocesamientopedidos.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoServiceImpl implements PedidoService {
    @Autowired
    private PedidoRepository pedidoRepository;
    @Override
    public List<Pedido> listar() {
        return pedidoRepository.findAll();
    }

    @Override
    public Pedido guardar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public Pedido actualizar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public Optional<Pedido> listarPorId(Integer id) {
        return pedidoRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        pedidoRepository.deleteById(id);
    }
}
