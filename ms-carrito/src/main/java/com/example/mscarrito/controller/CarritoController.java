package com.example.mscarrito.controller;

import com.example.mscarrito.entity.CarritoItem;
import com.example.mscarrito.service.CarritoService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carrito")
public class CarritoController {

    private final CarritoService carritoService;

    @Autowired
    public CarritoController(CarritoService carritoService) {
        this.carritoService = carritoService;
    }

    @GetMapping("/items")
    public List<CarritoItem> obtenerItems() {
        return carritoService.obtenerTodosLosItems();
    }

    @PostMapping("/agregar")
    public CarritoItem agregarItem(@RequestBody CarritoItem item) {
        return carritoService.agregarItemAlCarrito(item);
    }

    @CircuitBreaker(name = "carritoListarPorIdCB", fallbackMethod = "fallBackCarritoListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<CarritoItem> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(carritoService.ListarPorId(id).get());
    }

    @DeleteMapping("/vaciar/{id}")
    public void vaciarItemPorId(@PathVariable Integer id) {
        carritoService.vaciarCarrito(id);
    }

    @DeleteMapping("/vaciar")
    public CarritoItem vaciarCarrito(@RequestBody CarritoItem item) {
        return carritoService.vaciarCarrito(item);
    }
    private ResponseEntity<CarritoItem> fallBackProductoListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        CarritoItem carritoItem = new CarritoItem();
        carritoItem.setId(90000);
        return ResponseEntity.ok().body(carritoItem);
}
}
