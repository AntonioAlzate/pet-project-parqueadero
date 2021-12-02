package com.co.sofka.project.parqueadero.businessexceptions.movimiento;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class VehiculoYaIngresadoException extends RuntimeException{

    public VehiculoYaIngresadoException(String mensaje){
        super(mensaje);
    }
}
