package com.co.sofka.project.parqueadero.businessexceptions.handler;

import com.co.sofka.project.parqueadero.businessexceptions.general.CampoRequeridoException;
import com.co.sofka.project.parqueadero.businessexceptions.movimiento.VehiculoSinIngresoRegistradoException;
import com.co.sofka.project.parqueadero.businessexceptions.movimiento.VehiculoYaIngresadoException;
import com.co.sofka.project.parqueadero.businessexceptions.tarifa.*;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoNoExisteException;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoSinIdEspecificadoException;
import com.co.sofka.project.parqueadero.businessexceptions.vehiculo.VehiculoYaExisteException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
class ApiExceptqionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler({
            TarifaNoExisteException.class,
            VehiculoNoExisteException.class
    })
    @ResponseBody
    public MensajeError notFoundRequest(HttpServletRequest request, Exception exception){
        return new MensajeError(exception, request.getRequestURI());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({
            CampoRequeridoException.class,
            VehiculoSinIngresoRegistradoException.class,
            VehiculoYaIngresadoException.class,
            NombreTarifaVacioException.class,
            TarifaSinIdEspecificadoException.class,
            TarifaYaExisteException.class,
            ValorTarifaIncorrectoException.class,
            VehiculoSinIdEspecificadoException.class,
            VehiculoYaExisteException.class
    })
   @ResponseBody
   public MensajeError badRequest(HttpServletRequest request, Exception exception){
        return new MensajeError(exception, request.getRequestURI());
    }

   @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
   @ExceptionHandler({Exception.class})
   @ResponseBody
   public MensajeError fatalErrorUnexpectedException(HttpServletRequest request, Exception exception){
       return new MensajeError(exception, request.getRequestURI());
   }
}
