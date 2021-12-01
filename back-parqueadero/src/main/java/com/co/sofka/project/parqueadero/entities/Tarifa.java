package com.co.sofka.project.parqueadero.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TARIFAS")
public class Tarifa {

    @Id
    @GeneratedValue
    private Long idTarifa;

    private String nombre;
    private double valor;
}
