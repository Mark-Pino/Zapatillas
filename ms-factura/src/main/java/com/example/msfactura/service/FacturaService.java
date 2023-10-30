package com.example.msfactura.service;

import com.example.msfactura.entity.Factura;

import java.util.List;
import java.util.Optional;


public interface FacturaService {

    public List<Factura> obtenerTodasLasFacturas();
    public Factura guardarFactura(Factura factura);
    public Optional<Factura> obtenerFacturaPorId(Integer id);
    public void eliminarFactura(Long id);

}
