package com.example.msinventario.Controller;


import com.example.msinventario.Entity.Almacen;
import com.example.msinventario.Service.AlmacenService;
import com.example.msinventario.dto.Proveedor;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/inventario")
public class AlmacenController {
    @Autowired
    private AlmacenService almacenService;

    @GetMapping()
    public ResponseEntity<List<Almacen>> list() {
        return ResponseEntity.ok(almacenService.listar());
    }

    @PostMapping()
    public ResponseEntity<Almacen> save(@RequestBody Almacen almacen) {
        return ResponseEntity.ok(almacenService.guardar(almacen));
    }

    @PutMapping()
    public ResponseEntity<Almacen> update(@RequestBody Almacen almacen) {
        return ResponseEntity.ok(almacenService.actualizar(almacen));
    }
    @CircuitBreaker(name = "almacenListarPorIdCB", fallbackMethod = "fallBackAlmacenListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Almacen> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(almacenService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Almacen>> deleteById(@PathVariable(required = true) Integer id) {
        almacenService.eliminarPorId(id);
        return ResponseEntity.ok(almacenService.listar());
    }
    private ResponseEntity<Almacen> fallBackAlmacenListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Almacen almacen = new Almacen();
        almacen.setId(90000);
        Proveedor proveedor = new Proveedor();
        proveedor.setNombre("Recurso no disponible al nombre del Proveedor");
        proveedor.setDireccion("no tiene direccion");
        almacen.setProveedor(proveedor);
        return ResponseEntity.ok().body(almacen);
    }

}
