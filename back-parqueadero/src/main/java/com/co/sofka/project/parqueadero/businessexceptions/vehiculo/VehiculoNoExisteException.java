package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class VehiculoNoExisteException extends RuntimeException{
    public VehiculoNoExisteException(String mensaje){
        super(mensaje);
    }
}
