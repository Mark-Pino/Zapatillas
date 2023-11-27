package com.example.mscliente.controller;

import com.example.mscliente.entity.Cliente;
import com.example.mscliente.service.ClienteService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping()
    public ResponseEntity<List<Cliente>> list() {
        return ResponseEntity.ok(clienteService.listar());
    }

    @PostMapping()
    public ResponseEntity<Cliente> save(@RequestBody Cliente cliente) {
        return ResponseEntity.ok(clienteService.guardar(cliente));
    }

    @PutMapping()
    public ResponseEntity<Cliente> update(@RequestBody Cliente cliente) {
        return ResponseEntity.ok(clienteService.actualizar(cliente));
    }

    @CircuitBreaker(name = "clienteListarPorIdCB", fallbackMethod = "fallBackClienteListarPorIdCB")
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(clienteService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Cliente>> deleteById(@PathVariable(required = true) Integer id) {
        clienteService.eliminarPorId(id);
        return ResponseEntity.ok(clienteService.listar());
    }
    private ResponseEntity<Cliente> fallBackClienteListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        Cliente cliente = new Cliente();
        cliente.setId(90000);
        return ResponseEntity.ok().body(cliente);
    }
}
