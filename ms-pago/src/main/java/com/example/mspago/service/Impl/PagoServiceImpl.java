package com.example.mspago.service.Impl;

import com.example.mspago.entity.Pago;
import com.example.mspago.repository.PagoRepository;
import com.example.mspago.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PagoServiceImpl implements PagoService {

    @Autowired
    private PagoRepository pagoRepository;

    @Override
    public Pago realizarPago(Pago pago) {
        // Lógica para realizar un pago
        return pagoRepository.save(pago);
    }

    @Override
    public Pago cancelarPago(Pago pago) {
        // Lógica para cancelar un pago
        return pagoRepository.save(pago);
    }

    @Override
    public Optional<Pago> listarPorId(Integer id) {
        // Lógica para obtener un pago por su ID
        return pagoRepository.findById(Long.valueOf(id));
    }

    // Implementación del método para listar todos los pagos
    @Override
    public List<Pago> listarTodos() {
        // Lógica para obtener una lista de todos los pagos
        return pagoRepository.findAll();
    }
}