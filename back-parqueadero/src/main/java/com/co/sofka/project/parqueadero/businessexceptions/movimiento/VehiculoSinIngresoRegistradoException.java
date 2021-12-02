package com.co.sofka.project.parqueadero.businessexceptions.movimiento;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class VehiculoSinIngresoRegistradoException extends BadRequestException {

    public VehiculoSinIngresoRegistradoException(String mensaje) {
        super(mensaje);
    }
}
