package com.co.sofka.project.parqueadero.factory;

import com.co.sofka.project.parqueadero.dtos.movimiento.MovimientoDTO;
import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoDTO;
import com.co.sofka.project.parqueadero.entities.Movimiento;
import com.co.sofka.project.parqueadero.entities.Tarifa;
import com.co.sofka.project.parqueadero.entities.Vehiculo;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Component
public class MovimientoFactory {


    public Movimiento crearConDatosIngreso(Vehiculo vehiculoEntity, Tarifa tarifaEntity) {
        Movimiento movimiento = new Movimiento();

        movimiento.setFechaIngreso(LocalDateTime.now());
        movimiento.setVehiculo(vehiculoEntity);
        movimiento.setTarifa(tarifaEntity);
        movimiento.setFinalizado(false);
        movimiento.setValorPago(0);

        return movimiento;
    }

    public MovimientoDTO entityToDTOMovimiento(Movimiento movimiento, VehiculoDTO vehiculo, TarifaDTO tarifa) {
        MovimientoDTO movimientoDTO = new MovimientoDTO();

        movimientoDTO.setIdMovimiento(movimiento.getIdMovimiento());
        movimientoDTO.setFechaIngreso(movimiento.getFechaIngreso());
        movimientoDTO.setFechaSalida(movimiento.getFechaSalida());
        movimientoDTO.setFinalizado(movimiento.isFinalizado());
        movimientoDTO.setValorPago(movimiento.getValorPago());
        movimientoDTO.setVehiculoDTO(vehiculo);
        movimientoDTO.setTarifaDTO(tarifa);

        LocalDateTime fechaEntrada = movimiento.getFechaIngreso();
        LocalDateTime fechaSalida = movimiento.getFechaSalida();
        movimientoDTO.setTiempoAPagarHoras(calculoDiferenciaTiempoEnHoras(fechaEntrada, fechaSalida));


        return movimientoDTO;
    }

    private double calculoDiferenciaTiempoEnHoras(LocalDateTime fechaEntrada, LocalDateTime fechaSalida){

        double minutos = ChronoUnit.MINUTES.between(fechaEntrada, fechaSalida);

        BigDecimal horasRedondeado = new BigDecimal(minutos * 0.0166667)
                .setScale(2, RoundingMode.HALF_UP);

        return horasRedondeado.doubleValue();
    }
}
