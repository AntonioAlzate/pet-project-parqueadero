package com.co.sofka.project.parqueadero.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "TARIFAS")
public class Tarifa {

    @Id
    @GeneratedValue
    private Long idTarifa;

    private String nombre;
    private double valor;
}
