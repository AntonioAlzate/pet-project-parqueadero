package com.co.sofka.project.parqueadero.controllers;

import com.co.sofka.project.parqueadero.dtos.movimiento.ComprobanteIngresoDTO;
import com.co.sofka.project.parqueadero.dtos.movimiento.IngresoVehiculoDTO;
import com.co.sofka.project.parqueadero.dtos.movimiento.MovimientoDTO;
import com.co.sofka.project.parqueadero.services.MovimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/movimientos")
@CrossOrigin(origins = "http://localhost:3000")
public class MovimientoController {

    @Autowired
    MovimientoService movimientoService;

    @PostMapping("/ingreso/vehiculo")
    public ResponseEntity<ComprobanteIngresoDTO> registrarIngreso(@RequestBody IngresoVehiculoDTO ingresoDTO){
        ComprobanteIngresoDTO comprobante = movimientoService.registrarIngreso(ingresoDTO);

        return new ResponseEntity<ComprobanteIngresoDTO>(comprobante, HttpStatus.CREATED);
    }

   @GetMapping("/salida/vehiculo/{placa}")
   public ResponseEntity<MovimientoDTO> registrarSalida(@PathVariable("placa") String placa){
        MovimientoDTO movimientoDTO = movimientoService.registrarSalida(placa);

        return new ResponseEntity<MovimientoDTO>(movimientoDTO, HttpStatus.OK);
   }

}