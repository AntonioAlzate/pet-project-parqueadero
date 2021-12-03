package com.co.sofka.project.parqueadero.businessexceptions.general;

public class NotFoundException extends RuntimeException{

    private static final String DESCRIPCION = "Not Found (404). ";

    public NotFoundException(String mensaje){
        super(mensaje);
    }
}
