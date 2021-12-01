package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

public class VehiculoNoExisteException extends RuntimeException{
    public VehiculoNoExisteException(String mensaje){
        super(mensaje);
    }
}
