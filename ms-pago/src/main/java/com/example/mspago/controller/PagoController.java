package com.example.mspago.controller;

import com.example.mspago.entity.Pago;
import com.example.mspago.service.PagoService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/pagos")
public class PagoController {

    private final PagoService pagoService;

    @Autowired
    public PagoController(PagoService pagoService) {
        this.pagoService = pagoService;
    }

    @PostMapping("/realizar")
    public Pago realizarPago(@RequestBody Pago pago) {
        return pagoService.realizarPago(pago);
    }

    @CircuitBreaker(name= "PagoListarPorIdCB", fallbackMethod = "fallBackPagoListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Pago> lisById(@PathVariable(required = true )Integer id){
        return  ResponseEntity.ok().body(pagoService.listarPorId(id).get());
    }

    @PostMapping("/cancelar")
    public Pago cancelarPago(@RequestBody Pago pago) {
        return pagoService.cancelarPago(pago);
    }

    @GetMapping("/{id}")
    public Optional<Pago> obtenerPagoPorId(@PathVariable Integer id) {
        return pagoService.listarPorId(id);
    }

    private ResponseEntity<Pago> fallBackPagoListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e){
        Pago pago = new Pago();
        pago.setId(90000);
        return ResponseEntity.ok().body(pago);

    }


}




