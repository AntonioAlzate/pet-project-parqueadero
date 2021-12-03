package com.co.sofka.project.parqueadero.services;

import com.co.sofka.project.parqueadero.businessexceptions.tarifa.*;
import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaCreacionDTO;
import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import com.co.sofka.project.parqueadero.entities.Tarifa;
import com.co.sofka.project.parqueadero.factory.TarifaFactory;
import com.co.sofka.project.parqueadero.repository.TarifaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarifaService {

    private static final String NOMBRE_TARIFA_VACIO = "El nombre de una tarifa no puede estar vacío.";
    private static final String VALOR_TARIFA_INCORRECTO = "El valor de una tarifa no puede ser igual o menor a cero.";
    private static final String TARIFA_YA_EXISTE = "La tarifa con el nombre que desea registrar ya se encuentra en el sistema.";
    private static final String TARIFA_NO_EXISTE = "No es posible realizar una acción sobre una Tarifa que no existe.";
    private static final String ELIMINACION_TARIFA_EXITOSA = "Se ha eliminado la tarifa exitosamente.";
    private static final String TARIFA_ELIMINAR_NO_EXISTE = "No es posible eliminar una Tarifa con un id que no existe.";
    private static final String ID_SIN_ESPECIFICAR = "Para esta operación es necesario enviar el id de la tarifa correspondiente.";

    @Autowired
    TarifaFactory tarifaFactory;

    @Autowired
    TarifaRepository tarifaRepository;

    public List<TarifaDTO> listarTodasTarifas() {

        List<Tarifa> tarifasEntities = (List<Tarifa>) tarifaRepository.findAll();

        return tarifaFactory.EntitiestoDTOsTarifa(tarifasEntities);
    }

    public TarifaDTO obtenerTarifaPorId(Long id) {

        Tarifa tarifaEntity = tarifaRepository.findById(id)
                .orElseThrow(() -> new TarifaNoExisteException(TARIFA_NO_EXISTE));

        return tarifaFactory.EntitytoDTOTarifa(tarifaEntity);
    }

    public TarifaDTO crearTarifa(TarifaCreacionDTO tarifaCreacionDTO) {

        validarNombreTarifa(tarifaCreacionDTO.getNombre());
        validarNoExistenciaTarifa(tarifaCreacionDTO.getNombre());
        validarValorTarifa(tarifaCreacionDTO.getValor());

        Tarifa tarifaEntity = new Tarifa();
        tarifaEntity.setNombre(tarifaCreacionDTO.getNombre().trim().toUpperCase());
        tarifaEntity.setValor(tarifaCreacionDTO.getValor());

        tarifaEntity = tarifaRepository.save(tarifaEntity);

        return tarifaFactory.EntitytoDTOTarifa(tarifaEntity);
    }

    public TarifaDTO actualizarTarifa(TarifaDTO tarifaDTO) {
        validarNombreTarifa(tarifaDTO.getNombre());
        validarValorTarifa(tarifaDTO.getValor());
        validarExistenciaTarifa(tarifaDTO.getIdTarifa());

        Tarifa tarifaEntity = new Tarifa();
        tarifaEntity.setIdTarifa(tarifaDTO.getIdTarifa());
        tarifaEntity.setNombre(tarifaDTO.getNombre().trim().toUpperCase());
        tarifaEntity.setValor(tarifaDTO.getValor());

        tarifaEntity = tarifaRepository.save(tarifaEntity);

        return tarifaFactory.EntitytoDTOTarifa(tarifaEntity);
    }

    public String  eliminarTarifa(Long id){
        validarExistenciaTarifa(id);

        tarifaRepository.deleteById(id);

        return ELIMINACION_TARIFA_EXITOSA;
    }


    private void validarNombreTarifa(String nombre){
        if(nombre == null || nombre.isEmpty())
            throw new NombreTarifaVacioException(NOMBRE_TARIFA_VACIO);
    }

    private void validarValorTarifa(double valor){
        if(valor <= 0){
            throw new ValorTarifaIncorrectoException(VALOR_TARIFA_INCORRECTO);
        }
    }

    private void validarNoExistenciaTarifa(String nombre){
        if(tarifaRepository.findByNombre(nombre.toUpperCase()) != null){
            throw new TarifaYaExisteException(TARIFA_YA_EXISTE);
        }
    }

    private void validarExistenciaTarifa(Long idTarifa) {
        validarExistenciaId(idTarifa);

        if(tarifaRepository.findById(idTarifa).orElse(null) == null){
            throw new TarifaNoExisteException(TARIFA_NO_EXISTE);
        }
    }

    private void validarExistenciaId(Long idTarifa) {
        if(idTarifa == null){
            throw new TarifaSinIdEspecificadoException(ID_SIN_ESPECIFICAR);
        }
    }

}
