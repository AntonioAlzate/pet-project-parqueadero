package com.co.sofka.project.parqueadero.repository;

import com.co.sofka.project.parqueadero.entities.Tarifa;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarifaRepository extends CrudRepository<Tarifa, Long> {

    Tarifa findByNombre(String nombre);
}
