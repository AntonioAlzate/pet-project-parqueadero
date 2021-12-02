package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import com.co.sofka.project.parqueadero.businessexceptions.general.NotFoundException;

public class TarifaNoExisteException extends NotFoundException {
    public TarifaNoExisteException(String mensaje) {
        super(mensaje);
    }
}
