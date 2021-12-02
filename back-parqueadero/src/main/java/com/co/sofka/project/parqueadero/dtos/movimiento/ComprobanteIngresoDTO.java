package com.co.sofka.project.parqueadero.dtos.movimiento;

import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ComprobanteIngresoDTO {

    private String placa;
    private LocalDateTime fechaIngreso;
    private TarifaDTO tarifaDTO;
}
