package com.co.sofka.project.parqueadero.dtos.vehiculo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiculoCreacionDTO {

    private String placa;
    private String color;
    private String marca;
}
