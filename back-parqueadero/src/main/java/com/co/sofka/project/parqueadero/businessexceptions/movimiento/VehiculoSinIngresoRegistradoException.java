package com.co.sofka.project.parqueadero.businessexceptions.movimiento;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class VehiculoSinIngresoRegistradoException extends RuntimeException{

    public VehiculoSinIngresoRegistradoException(String mensaje) {
        super(mensaje);
    }
}
