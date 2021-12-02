package com.co.sofka.project.parqueadero.services;

import com.co.sofka.project.parqueadero.businessexceptions.movimiento.VehiculoSinIngresoRegistradoException;
import com.co.sofka.project.parqueadero.businessexceptions.movimiento.VehiculoYaIngresadoException;
import com.co.sofka.project.parqueadero.businessexceptions.tarifa.TarifaNoExisteException;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoNoExisteException;
import com.co.sofka.project.parqueadero.dtos.movimiento.ComprobanteIngresoDTO;
import com.co.sofka.project.parqueadero.dtos.movimiento.IngresoVehiculoDTO;
import com.co.sofka.project.parqueadero.dtos.movimiento.MovimientoDTO;
import com.co.sofka.project.parqueadero.dtos.tarifa.TarifaDTO;
import com.co.sofka.project.parqueadero.dtos.vehiculo.VehiculoDTO;
import com.co.sofka.project.parqueadero.entities.Movimiento;
import com.co.sofka.project.parqueadero.entities.Tarifa;
import com.co.sofka.project.parqueadero.entities.Vehiculo;
import com.co.sofka.project.parqueadero.factory.MovimientoFactory;
import com.co.sofka.project.parqueadero.factory.TarifaFactory;
import com.co.sofka.project.parqueadero.factory.VehiculoFactory;
import com.co.sofka.project.parqueadero.repository.MovimientoRepository;
import com.co.sofka.project.parqueadero.repository.TarifaRepository;
import com.co.sofka.project.parqueadero.repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MovimientoService {

    private static final String VEHICULO_NO_REGISTRADO = "El vehículo no se encuentra registrado en el sistema, recuerde registrarlo antes de " +
            "registrar un ingreso a dicho vehículo.";
    private static final String VEHICULO_YA_INGRESADO = "El vehículo que desea ingresar ya tiene un ingreso registrado, por lo tanto debe finalizar " +
            "el ingreso ya registrado en el sistema";
    private static final String TARIFA_NO_REGISTRADA = "La tarifa no se encuentra registrada en el sistema";
    private static final String VEHICULO_SIN_INGRESO_REGISTRADO = "El vehículo se encuentra registrado pero no existe un ingreso al parqueadero en el sistema el cual finalizar";

    @Autowired
    MovimientoRepository movimientoRepository;

    @Autowired
    VehiculoRepository vehiculoRepository;

    @Autowired
    TarifaRepository tarifaRepository;

    @Autowired
    MovimientoFactory movimientoFactory;

    @Autowired
    TarifaFactory tarifaFactory;

    @Autowired
    VehiculoFactory vehiculoFactory;

    public ComprobanteIngresoDTO registrarIngreso(IngresoVehiculoDTO ingresoDTO) {
        String placa = ingresoDTO.getPlaca().trim().toUpperCase();
        validarExistenciaVehiculo(placa);
        validarVehiculoSinIngresoVigente(placa);
        validarExistenciaTarifa(ingresoDTO.getIdTarifa());

        Vehiculo vehiculoEntity = vehiculoRepository.findByPlaca(placa);
        Tarifa tarifaEntity = tarifaRepository.findById(ingresoDTO.getIdTarifa()).orElseThrow();

        Movimiento movimiento = movimientoFactory.crearConDatosIngreso(vehiculoEntity, tarifaEntity);
        movimientoRepository.save(movimiento);

        ComprobanteIngresoDTO comprobante = new ComprobanteIngresoDTO();
        comprobante.setFechaIngreso(movimiento.getFechaIngreso());
        comprobante.setPlaca(vehiculoEntity.getPlaca());
        comprobante.setTarifaDTO(tarifaFactory.EntitytoDTOTarifa(tarifaEntity));

        return comprobante;
    }

    private void validarExistenciaVehiculo(String placa) {
        if (vehiculoRepository.findByPlaca(placa) == null) {
            throw new VehiculoNoExisteException(VEHICULO_NO_REGISTRADO);
        }
    }

    private void validarVehiculoSinIngresoVigente(String placa) {
        if (movimientoRepository.findByVehiculoPlacaAndFinalizado(placa, false) != null) {
            throw new VehiculoYaIngresadoException(VEHICULO_YA_INGRESADO);
        }
    }

    private void validarExistenciaTarifa(Long idTarifa) {
        if (tarifaRepository.findById(idTarifa) == null) {
            throw new TarifaNoExisteException(TARIFA_NO_REGISTRADA);
        }
    }

    public MovimientoDTO registrarSalida(String placa) {

        String placaSan = placa.trim().toUpperCase();

        Movimiento movimiento = movimientoRepository.findByVehiculoPlacaAndFinalizado(placaSan, false);
        validarExistenciaVehiculo(placa);
        validarVehiculoEnParqueadero(movimiento);

        movimiento.setFechaSalida(LocalDateTime.now());
        movimiento.setFinalizado(true);
        movimiento.calcularValorPagar();

        movimientoRepository.save(movimiento);

        VehiculoDTO vehiculo = vehiculoFactory.EntitytoDTOVehiculo(vehiculoRepository.findByPlaca(placaSan));
        TarifaDTO tarifa = tarifaFactory.EntitytoDTOTarifa(tarifaRepository.findById(movimiento.getTarifa().getIdTarifa()).orElseThrow());
        return movimientoFactory.entityToDTOMovimiento(movimiento, vehiculo, tarifa);
    }

    private void validarVehiculoEnParqueadero(Movimiento movimiento) {
        if (movimiento == null) {
            throw new VehiculoSinIngresoRegistradoException(VEHICULO_SIN_INGRESO_REGISTRADO);
        }
    }
}
