package com.example.mspago.service;
import com.example.mspago.entity.Pago;

import java.util.List;
import java.util.Optional;

public interface PagoService {
        public List<Pago> obtenerTodosLosPagos();
        Pago crearPago(Pago pago);
        Optional<Pago> obtenerPagoPorId(Integer id);
        public void vaciarPago(Integer id);
}


