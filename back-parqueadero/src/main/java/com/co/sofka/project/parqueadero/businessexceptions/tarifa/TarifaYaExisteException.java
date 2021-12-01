package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class TarifaYaExisteException extends RuntimeException{
    public TarifaYaExisteException(String mensaje) {
        super(mensaje);
    }
}
