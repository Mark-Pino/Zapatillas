package com.example.mspago.controller;

import com.example.mspago.entity.Pago;
import com.example.mspago.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pago")
public class PagoController {
    private final PagoService pagoService;

    @Autowired
    public PagoController(PagoService pagoService) {
        this.pagoService = pagoService;
    }

    @GetMapping
    public List<Pago> obtenerTodosLosPagos() {
        return pagoService.obtenerTodosLosPagos();
    }

    @PostMapping
    public Pago crearPago(@RequestBody Pago pago) {
        return pagoService.crearPago(pago);
    }

    @GetMapping("/{id}")
    public Optional<Pago> obtenerPagoPorId(@PathVariable Integer id) {
        return pagoService.obtenerPagoPorId(id);
    }

    @DeleteMapping("/{id}")
    public void vaciarPago(@PathVariable Integer id) {
        pagoService.vaciarPago(id);
    }
}