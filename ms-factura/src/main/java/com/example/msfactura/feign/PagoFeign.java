package com.example.msfactura.feign;

import com.example.msfactura.dto.Pago;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-Pago-service", path = "/pago")
public interface PagoFeign {
    @GetMapping("/{id}")
    public ResponseEntity<Pago> listById(@PathVariable(required = true) Integer id);
}
