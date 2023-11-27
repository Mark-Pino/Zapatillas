package com.example.mspago.service;

import com.example.mspago.entity.Pago;
import com.example.mspago.repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PagoServiceImpl implements PagoService {

    private final PagoRepository pagoRepository;

    @Autowired
    public PagoServiceImpl(PagoRepository pagoRepository) {
        this.pagoRepository = pagoRepository;
    }

    @Override
    public List<Pago> obtenerTodosLosPagos() {
        return pagoRepository.findAll();
    }

    @Override
    public Pago crearPago(Pago pago) {
        return pagoRepository.save(pago);
    }

    @Override
    public Optional<Pago> obtenerPagoPorId(Integer id) {
        return pagoRepository.findById(id);
    }

    @Override
    public void vaciarPago(Integer id) {
        pagoRepository.deleteById(id);
    }
}