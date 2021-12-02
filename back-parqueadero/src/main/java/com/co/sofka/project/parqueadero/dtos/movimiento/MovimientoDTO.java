package com.co.sofka.project.parqueadero.dtos.movimiento;

import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoDTO;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MovimientoDTO {

    private Long idMovimiento;

    private LocalDateTime fechaIngreso;
    private LocalDateTime fechaSalida;
    private boolean finalizado;
    private double valorPago;
    private double tiempoAPagarHoras;
    private VehiculoDTO vehiculoDTO;
    private TarifaDTO tarifaDTO;

}
