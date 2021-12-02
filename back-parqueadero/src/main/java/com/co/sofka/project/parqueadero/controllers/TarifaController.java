package com.co.sofka.project.parqueadero.controllers;

import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaCreacionDTO;
import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import com.co.sofka.project.parqueadero.services.TarifaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/tarifas")
@CrossOrigin(origins = "http://localhost:3000")
public class TarifaController {

    @Autowired
    TarifaService tarifaService;

    @GetMapping()
    public ResponseEntity<List<TarifaDTO>> listarTodasTarifas(){
        List<TarifaDTO> tarifas = tarifaService.listarTodasTarifas();

        return new ResponseEntity<List<TarifaDTO>>(tarifas, HttpStatus.OK);
    }

    @GetMapping(value = "tarifa/{id}")
    public ResponseEntity<TarifaDTO> obtenerTarifaPorId(@PathVariable("id") Long id){
        TarifaDTO tarifaDTO = tarifaService.obtenerTarifaPorId(id);

        return new ResponseEntity<TarifaDTO>(tarifaDTO, HttpStatus.OK);
    }

    @PostMapping(value = "/tarifa")
    public ResponseEntity<TarifaDTO> crearTarifa(@RequestBody TarifaCreacionDTO tarifaCreacionDTO){
        TarifaDTO tarifaDTO = tarifaService.crearTarifa(tarifaCreacionDTO);

        return new ResponseEntity<TarifaDTO>(tarifaDTO, HttpStatus.CREATED);
    }

    @PutMapping(value = "tarifa/{id}")
    public ResponseEntity<TarifaDTO> actualizarTarifa(@RequestBody TarifaDTO tarifaDTO){

        TarifaDTO tarifa = tarifaService.actualizarTarifa(tarifaDTO);

        return new ResponseEntity<TarifaDTO>(tarifa, HttpStatus.OK);
    }

    @DeleteMapping(value = "tarifa/{id}")
    public ResponseEntity<String> eliminarTarifa(@PathVariable("id") Long id){
        String respuesta = tarifaService.eliminarTarifa(id);
        return new ResponseEntity<String >(respuesta, HttpStatus.OK);
    }
}
