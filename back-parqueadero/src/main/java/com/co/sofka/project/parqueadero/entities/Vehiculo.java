package com.co.sofka.project.parqueadero.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "VEHICULOS")
public class Vehiculo {

    @Id
    @GeneratedValue
    private Long idVehiculo;

    private String placa;
    private String color;
    private String marca;

    @OneToMany(mappedBy = "vehiculo")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @JsonIgnoreProperties("vehiculo")
    private List<Movimiento> movimientos;

}