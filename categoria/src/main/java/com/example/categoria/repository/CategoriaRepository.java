package com.example.categoria.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.categoria.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

}
