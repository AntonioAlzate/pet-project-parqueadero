package com.co.sofka.project.parqueadero.factory;

import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoDTO;
import com.co.sofka.project.parqueadero.entities.Vehiculo;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class VehiculoFactory {

    public Vehiculo DTOtoEntityVehiculo(VehiculoDTO vehiculoDTO){
        Vehiculo vehiculoEntity = new Vehiculo();
        vehiculoEntity.setIdVehiculo(vehiculoDTO.getIdVehiculo());
        vehiculoEntity.setPlaca(vehiculoDTO.getPlaca());
        vehiculoEntity.setMarca(vehiculoDTO.getMarca());
        vehiculoEntity.setColor(vehiculoDTO.getColor());

        return vehiculoEntity;
    }

    public List<Vehiculo> DTOstoEntitiesTarifa(List<VehiculoDTO> vehiculoDTOS){

        List<Vehiculo> vehiculosEntities =
                vehiculoDTOS.stream().map(this::DTOtoEntityVehiculo).collect(Collectors.toList());

        return vehiculosEntities;
    }

    public VehiculoDTO EntitytoDTOVehiculo(Vehiculo vehiculo){

        VehiculoDTO vehiculoDTO = new VehiculoDTO();
        vehiculoDTO.setIdVehiculo(vehiculo.getIdVehiculo());
        vehiculoDTO.setPlaca(vehiculo.getPlaca());
        vehiculoDTO.setMarca(vehiculo.getMarca());
        vehiculoDTO.setColor(vehiculo.getColor());

        return vehiculoDTO;
    }

    public List<VehiculoDTO> EntitiestoDTOsVehiculo(List<Vehiculo> vehiculos){

        List<VehiculoDTO> vehiculoDTOS =
                vehiculos.stream().map(this::EntitytoDTOVehiculo).collect(Collectors.toList());

        return vehiculoDTOS;
    }
}
