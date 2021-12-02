package com.co.sofka.project.parqueadero.businessexceptions.vehiculo;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class VehiculoSinIdEspecificadoException extends BadRequestException {

    public VehiculoSinIdEspecificadoException(String mensaje){
        super(mensaje);
    }
}
