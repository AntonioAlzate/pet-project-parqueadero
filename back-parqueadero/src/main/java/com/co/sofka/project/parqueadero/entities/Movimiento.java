package com.co.sofka.project.parqueadero.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "MOVIMIENTOS")
public class Movimiento {

    @Id
    @GeneratedValue
    private Long idMovimiento;

    private LocalDateTime fechaIngreso;
    private LocalDateTime fechaSalida;
    private boolean estaFinalizado;
    private double valorPago;

    @ManyToOne
    @JoinColumn(name = "idVehiculo", referencedColumnName = "idVehiculo")
    private Vehiculo vehiculo;

    @ManyToOne
    @JoinColumn(name = "idTarifa", referencedColumnName = "idTarifa")
    private Tarifa tarifa;
}
