package com.co.sofka.project.parqueadero.businessexceptions.tarifa;

import com.co.sofka.project.parqueadero.businessexceptions.general.NotFoundException;

public class TarifaSinIdEspecificadoException extends NotFoundException {
    public TarifaSinIdEspecificadoException(String mensaje) {
        super(mensaje);
    }
}
