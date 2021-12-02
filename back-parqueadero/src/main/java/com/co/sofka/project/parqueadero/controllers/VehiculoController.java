package com.co.sofka.project.parqueadero.controllers;

import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoCreacionDTO;
import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoDTO;
import com.co.sofka.project.parqueadero.services.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/vehiculos")
@CrossOrigin(origins = "http://localhost:3000")
public class VehiculoController {

    @Autowired
    VehiculoService vehiculoService;

    @GetMapping()
    public ResponseEntity<List<VehiculoDTO>> listarTodosvehiculos(){
        List<VehiculoDTO> vehiculos = vehiculoService.listarTodosvehiculos();

        return new ResponseEntity<List<VehiculoDTO>>(vehiculos, HttpStatus.OK);
    }

    @GetMapping(value = "vehiculo/{id}")
    public ResponseEntity<VehiculoDTO> obtenerVehiculoPorId(@PathVariable("id") Long id){
        VehiculoDTO vehiculoDTO = vehiculoService.obtenerVehiculoPorId(id);

        return new ResponseEntity<VehiculoDTO>(vehiculoDTO, HttpStatus.OK);
    }

    @PostMapping(value = "/vehiculo")
    public ResponseEntity<VehiculoDTO> crearVehiculo(@RequestBody VehiculoCreacionDTO vehiculoCreacionDTO){
        VehiculoDTO vehiculoDTO = vehiculoService.crearVehiculo(vehiculoCreacionDTO);

        return new ResponseEntity<VehiculoDTO>(vehiculoDTO, HttpStatus.CREATED);
    }

    @PutMapping(value = "vehiculo/{id}")
    public ResponseEntity<VehiculoDTO> actualizarVehiculo(@RequestBody VehiculoDTO vehiculoDTO){

        VehiculoDTO vehiculo = vehiculoService.actualizarVehiculo(vehiculoDTO);

        return new ResponseEntity<VehiculoDTO>(vehiculo, HttpStatus.OK);
    }

    @DeleteMapping(value = "vehiculo/{id}")
    public ResponseEntity<String> eliminarVehiculo(@PathVariable("id") Long id){
        String respuesta = vehiculoService.eliminarVehiculo(id);
        return new ResponseEntity<String >(respuesta, HttpStatus.OK);
    }
}
