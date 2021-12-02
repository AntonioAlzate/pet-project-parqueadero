package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class VehiculoYaExisteException extends RuntimeException{
    public VehiculoYaExisteException(String mensaje){
        super(mensaje);
    }
}
