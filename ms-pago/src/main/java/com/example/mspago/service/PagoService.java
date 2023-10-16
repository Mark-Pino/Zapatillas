package com.example.mspago.service;

import com.example.mspago.entity.Pago;

import java.util.Optional;
import java.util.List; // Agregamos esta importación

public interface PagoService {
    Pago realizarPago(Pago pago); // Corregimos el tipo del argumento
    Pago cancelarPago(Pago pago); // Corregimos el tipo del argumento
    Optional<Pago> listarPorId(Integer id); // Corregimos el retorno y el nombre del método
    List<Pago> listarTodos(); // Agregamos un método para listar todos los pagos
}