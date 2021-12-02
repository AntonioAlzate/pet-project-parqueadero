package com.co.sofka.project.parqueadero.entities;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Data
@Entity
@Table(name = "MOVIMIENTOS")
public class Movimiento {

    @Id
    @GeneratedValue
    private Long idMovimiento;

    private LocalDateTime fechaIngreso;
    private LocalDateTime fechaSalida;
    private boolean finalizado;
    private double valorPago;

    @ManyToOne
    @JoinColumn(name = "idVehiculo", referencedColumnName = "idVehiculo")
    private Vehiculo vehiculo;

    @ManyToOne
    @JoinColumn(name = "idTarifa", referencedColumnName = "idTarifa")
    private Tarifa tarifa;

    public void calcularValorPagar() {
        double valorTarifa = this.tarifa.getValor();

        Long minutos = ChronoUnit.MINUTES.between(this.fechaIngreso, this.fechaSalida);

        double valorHorasPagar = minutos * 0.0166667;

        BigDecimal valorRedondeado = new BigDecimal(valorHorasPagar * valorTarifa).
                setScale(2, RoundingMode.HALF_UP);

        this.valorPago = valorRedondeado.doubleValue();
    }
}
