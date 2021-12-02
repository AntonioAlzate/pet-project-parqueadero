package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class VehiculoYaExisteException extends BadRequestException {
    public VehiculoYaExisteException(String mensaje){
        super(mensaje);
    }
}
