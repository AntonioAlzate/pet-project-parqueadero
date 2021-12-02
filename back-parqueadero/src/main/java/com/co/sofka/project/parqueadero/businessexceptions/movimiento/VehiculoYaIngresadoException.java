package com.co.sofka.project.parqueadero.businessexceptions.movimiento;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class VehiculoYaIngresadoException extends BadRequestException {

    public VehiculoYaIngresadoException(String mensaje){
        super(mensaje);
    }
}
