package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class NombreTarifaVacioException extends BadRequestException {

    public NombreTarifaVacioException(String mensaje) {
        super(mensaje);
    }
}
