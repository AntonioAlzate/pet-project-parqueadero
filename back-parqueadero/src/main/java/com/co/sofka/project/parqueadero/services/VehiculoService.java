package com.co.sofka.project.parqueadero.services;

import com.co.sofka.project.parqueadero.businessexceptions.CampoRequeridoException;
import com.co.sofka.project.parqueadero.businessexceptions.tarifa.TarifaNoExisteException;
import com.co.sofka.project.parqueadero.businessexceptions.tarifa.TarifaSinIdEspecificadoException;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoNoExisteException;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoSinIdEspecificadoException;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoYaExisteException;
import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoCreacionDTO;
import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoDTO;
import com.co.sofka.project.parqueadero.entities.Tarifa;
import com.co.sofka.project.parqueadero.entities.Vehiculo;
import com.co.sofka.project.parqueadero.factory.VehiculoFactory;
import com.co.sofka.project.parqueadero.repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculoService {

    private static final String  VEHICULO_NO_EXISTE = "El vehículo al que intenta acceder no existe";
    private static final String PLACA_REQUERIDA = "El campo PLACA es obligatorio";
    private static final String MARCA_REQUERIDA = "El campo MARCA es obligatorio";
    private static final String COLOR_REQUERIDA = "El campo COLOR es obligatorio";
    private static final String VEHICULO_YA_EXISTE = "La placa del vehículo que intenta ingresar ya está registrado";
    private static final String ELIMINACION_VEHICULO_EXITOSA = "El vehículo se elimino exitosamente";
    private static final String ID_SIN_ESPECIFICAR = "Para realizar la operación debe especificar el ID";

    @Autowired
    VehiculoRepository vehiculoRepository;

    @Autowired
    VehiculoFactory vehiculoFactory;

    public List<VehiculoDTO> listarTodosvehiculos() {
        List<Vehiculo> vehiculosEntities = (List<Vehiculo>) vehiculoRepository.findAll();

        return vehiculoFactory.EntitiestoDTOsVehiculo(vehiculosEntities);
    }

    public VehiculoDTO obtenerVehiculoPorId(Long id) {
        Vehiculo vehiculoEntity = vehiculoRepository.findById(id)
                .orElseThrow(() -> new VehiculoNoExisteException(VEHICULO_NO_EXISTE));

        return vehiculoFactory.EntitytoDTOVehiculo(vehiculoEntity);
    }

    public VehiculoDTO crearVehiculo(VehiculoCreacionDTO vehiculoCreacionDTO) {

        validarContenidoCamposVehiculo(vehiculoCreacionDTO);
        validarNoExistenciaVehiculo(vehiculoCreacionDTO.getPlaca(), null);

        Vehiculo vehiculoEntity = new Vehiculo();
        vehiculoEntity.setPlaca(vehiculoCreacionDTO.getPlaca().trim().toUpperCase());
        vehiculoEntity.setMarca(vehiculoCreacionDTO.getMarca().trim().toUpperCase());
        vehiculoEntity.setColor(vehiculoCreacionDTO.getColor().trim().toUpperCase());

        vehiculoEntity = vehiculoRepository.save(vehiculoEntity);

        return vehiculoFactory.EntitytoDTOVehiculo(vehiculoEntity);
    }

    private void validarNoExistenciaVehiculo(String placa, Long id) {
        Vehiculo vehiculoEntity = vehiculoRepository.findByPlaca(placa.toUpperCase());

        if(vehiculoEntity != null && vehiculoEntity.getIdVehiculo() != id){
            throw new VehiculoYaExisteException(VEHICULO_YA_EXISTE);
        }
    }

    private void validarContenidoCamposVehiculo(VehiculoCreacionDTO vehiculoCreacionDTO) {
        String placa = vehiculoCreacionDTO.getPlaca();
        String marca = vehiculoCreacionDTO.getMarca();
        String color = vehiculoCreacionDTO.getColor();

        validarCampo(placa, PLACA_REQUERIDA);
        validarCampo(marca, MARCA_REQUERIDA);
        validarCampo(color, COLOR_REQUERIDA);
    }

    private void validarContenidoCamposVehiculo(VehiculoDTO vehiculoDTO) {
        String placa = vehiculoDTO.getPlaca();
        String marca = vehiculoDTO.getMarca();
        String color = vehiculoDTO.getColor();

        validarCampo(placa, PLACA_REQUERIDA);
        validarCampo(marca, MARCA_REQUERIDA);
        validarCampo(color, COLOR_REQUERIDA);
    }

    private void validarCampo(String contenido, String mensajeExcepcion){
        if(contenido == null || contenido.isEmpty()){
            throw new CampoRequeridoException(mensajeExcepcion);
        }
    }

    public VehiculoDTO actualizarVehiculo(VehiculoDTO vehiculoDTO) {
        validarContenidoCamposVehiculo(vehiculoDTO);
        validarExistenciaVehiculo(vehiculoDTO.getIdVehiculo());
        validarNoExistenciaVehiculo(vehiculoDTO.getPlaca() , vehiculoDTO.getIdVehiculo());

        Vehiculo vehiculoEntity = new Vehiculo();
        vehiculoEntity.setIdVehiculo(vehiculoDTO.getIdVehiculo());
        vehiculoEntity.setPlaca(vehiculoDTO.getPlaca().trim().toUpperCase());
        vehiculoEntity.setMarca(vehiculoDTO.getMarca().trim().toUpperCase());
        vehiculoEntity.setColor(vehiculoDTO.getColor().trim().toUpperCase());

        vehiculoEntity = vehiculoRepository.save(vehiculoEntity);

        return vehiculoFactory.EntitytoDTOVehiculo(vehiculoEntity);
    }

    public String eliminarVehiculo(Long id) {
        validarExistenciaVehiculo(id);

        vehiculoRepository.deleteById(id);

        return ELIMINACION_VEHICULO_EXITOSA;
    }

    private void validarExistenciaVehiculo(Long id) {
        validarExistenciaId(id);

        if(vehiculoRepository.findById(id).orElse(null) == null){
            throw new VehiculoNoExisteException(VEHICULO_NO_EXISTE);
        }

    }

    private void validarExistenciaId(Long idVehiculo) {
        if(idVehiculo == null){
            throw new VehiculoSinIdEspecificadoException(ID_SIN_ESPECIFICAR);
        }
    }
}
