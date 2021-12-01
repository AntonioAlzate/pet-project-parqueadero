package com.co.sofka.project.parqueadero.factory;

import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import com.co.sofka.project.parqueadero.entities.Tarifa;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TarifaFactory {

    public Tarifa DTOtoEntityTarifa(TarifaDTO tarifaDTO){
        Tarifa tarifaEntity = new Tarifa();
        tarifaEntity.setIdTarifa(tarifaDTO.getIdTarifa());
        tarifaEntity.setNombre(tarifaDTO.getNombre());
        tarifaEntity.setValor(tarifaDTO.getValor());

        return tarifaEntity;
    }

    public List<Tarifa> DTOstoEntitiesTarifa(List<TarifaDTO> tarifaDTOS){

        List<Tarifa> tarifasEntities =
                tarifaDTOS.stream().map(this::DTOtoEntityTarifa).collect(Collectors.toList());

        return tarifasEntities;
    }

    public TarifaDTO EntitytoDTOTarifa(Tarifa tarifa){

        TarifaDTO tarifaDTO = new TarifaDTO();
        tarifaDTO.setIdTarifa(tarifa.getIdTarifa());
        tarifaDTO.setNombre(tarifa.getNombre());
        tarifaDTO.setValor(tarifa.getValor());

        return tarifaDTO;
    }

    public List<TarifaDTO> EntitiestoDTOsTarifa(List<Tarifa> tarifa){

        List<TarifaDTO> tarifasDTO =
                tarifa.stream().map(this::EntitytoDTOTarifa).collect(Collectors.toList());

        return tarifasDTO;
    }
}
