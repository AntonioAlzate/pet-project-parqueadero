package com.co.sofka.project.parqueadero.repository;

import com.co.sofka.project.parqueadero.entities.Movimiento;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimientoRepository extends CrudRepository<Movimiento, Long> {
}
