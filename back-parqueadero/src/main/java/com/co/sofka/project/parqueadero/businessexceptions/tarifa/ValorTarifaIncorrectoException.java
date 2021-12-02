package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import com.co.sofka.project.parqueadero.businessexceptions.general.BadRequestException;

public class ValorTarifaIncorrectoException extends BadRequestException {

    public ValorTarifaIncorrectoException(String mensaje) {
        super(mensaje);
    }
}
