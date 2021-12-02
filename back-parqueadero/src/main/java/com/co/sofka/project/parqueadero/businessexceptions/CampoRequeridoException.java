package com.co.sofka.project.parqueadero.businessexceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CampoRequeridoException extends RuntimeException{

    public CampoRequeridoException(String mensaje){
        super(mensaje);
    }
}
