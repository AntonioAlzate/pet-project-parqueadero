package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

public class VehiculoSinIdEspecificadoException extends RuntimeException{

    public VehiculoSinIdEspecificadoException(String mensaje){
        super(mensaje);
    }
}
