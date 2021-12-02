package com.co.sofka.project.parqueadero.businessexceptions.general;

public class BadRequestException extends RuntimeException{

    private static final String DESCRIPCION = "Bad Request (400). ";

    public BadRequestException(String mensaje){
        super(DESCRIPCION +  mensaje);
    }
}
