package com.example.msfactura.controller;

import com.example.msfactura.entity.Factura;
import com.example.msfactura.service.FacturaService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/factura")
public class FacturaController {
    private final FacturaService facturaService;

    @Autowired
    public FacturaController(FacturaService facturaService) {
        this.facturaService = facturaService;
    }

    @GetMapping
    public List<Factura> obtenerTodasLasFacturas() {
        return facturaService.obtenerTodasLasFacturas();
    }

    @CircuitBreaker(name = "facturaListarPorIdCB", fallbackMethod = "fallBackFacturaListarPorIdCB")
    @GetMapping("/{id}")
    public Factura obtenerFacturaPorId(@PathVariable Integer id) {
        Optional<Factura> factura = facturaService.obtenerFacturaPorId(id);
        return factura.orElse(null);
    }

    @PostMapping
    public Factura crearFactura(@RequestBody Factura factura) {
        return facturaService.guardarFactura(factura);
    }

    @DeleteMapping("/{id}")
    public void eliminarFactura(@PathVariable Integer id) {
        facturaService.eliminarFactura((long) id);
    }
    private ResponseEntity<Factura> fallBackFacturaListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Factura factura = new Factura();
        factura.setId(90000);
        return ResponseEntity.ok().body(factura);
    }
}