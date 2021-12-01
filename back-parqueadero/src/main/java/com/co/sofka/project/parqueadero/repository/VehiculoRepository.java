package com.co.sofka.project.parqueadero.repository;

import com.co.sofka.project.parqueadero.entities.Vehiculo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculoRepository extends CrudRepository<Vehiculo, Long> {
    Vehiculo findByPlaca(String placa);
}
