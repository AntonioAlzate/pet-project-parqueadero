package com.co.sofka.project.parqueadero.businessexceptions.general;

public class CampoRequeridoException extends BadRequestException{

    public CampoRequeridoException(String mensaje){
        super(mensaje);
    }
}
