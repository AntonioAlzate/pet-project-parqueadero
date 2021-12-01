package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class TarifaNoExisteException extends RuntimeException{
    public TarifaNoExisteException(String mensaje) {
        super(mensaje);
    }
}
