package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

import com.co.sofka.project.parqueadero.businessexceptions.general.NotFoundException;

public class VehiculoNoExisteException extends NotFoundException {
    public VehiculoNoExisteException(String mensaje){
        super(mensaje);
    }
}
