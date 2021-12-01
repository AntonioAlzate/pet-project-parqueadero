package com.co.sofka.project.parqueadero.businessexceptions;

public class CampoRequeridoException extends RuntimeException{

    public CampoRequeridoException(String mensaje){
        super(mensaje);
    }
}
