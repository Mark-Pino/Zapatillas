package com.example.msproveedor.Controller;

import com.example.msproveedor.Entity.Proveedor;
import com.example.msproveedor.Service.ProveedorService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Service
public class ProveedorController {


    @Autowired
    private ProveedorService proveedorService;

    @GetMapping()
    public ResponseEntity<List<Proveedor>> list() {
        return ResponseEntity.ok().body(proveedorService.listar());
    }

    @PostMapping
    public ResponseEntity<Proveedor> save(@RequestBody Proveedor proveedor) {
        return ResponseEntity.ok(proveedorService.guardar(proveedor));
    }

    @PutMapping()
    public ResponseEntity<Proveedor> update(@RequestBody Proveedor proveedor) {
        return ResponseEntity.ok(proveedorService.actualizar(proveedor));
    }
    @CircuitBreaker(name = "proveedorListarPorIdCB", fallbackMethod = "fallBackProveedorListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> listById(@PathVariable(required = true) Integer id) {
        Optional<Proveedor> proveedor = proveedorService.listarPorId(id);
        if (proveedor.isPresent()) {
            return ResponseEntity.ok(proveedor.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Proveedor>> deleteById(@PathVariable(required = true) Integer id) {
        proveedorService.eliminarPorId(id);
        return ResponseEntity.ok(proveedorService.listar());
    }
    private ResponseEntity<Proveedor> fallBackAlmacenListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Proveedor proveedor = new Proveedor();
        proveedor.setId(90000);
        return ResponseEntity.ok().body(proveedor);
    }
}
