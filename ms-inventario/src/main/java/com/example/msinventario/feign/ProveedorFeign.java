package com.example.msinventario.feign;

import com.example.msinventario.dto.Proveedor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-Proveedor-service", path = "/proveedor")
public interface ProveedorFeign {
    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> listById(@PathVariable(required = true) Integer id);

}
