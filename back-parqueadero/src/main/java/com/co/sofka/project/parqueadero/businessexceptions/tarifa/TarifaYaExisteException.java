package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class TarifaYaExisteException extends BadRequestException {
    public TarifaYaExisteException(String mensaje) {
        super(mensaje);
    }
}
