package com.co.sofka.project.parqueadero.dtos.tarifa;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TarifaCreacionDTO {

    private String nombre;

    private double valor;
}
