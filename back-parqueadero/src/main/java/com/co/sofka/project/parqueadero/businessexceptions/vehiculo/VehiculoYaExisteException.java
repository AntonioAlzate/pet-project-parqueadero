package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

public class VehiculoYaExisteException extends RuntimeException{
    public VehiculoYaExisteException(String mensaje){
        super(mensaje);
    }
}
