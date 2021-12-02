package com.co.sofka.project.parqueadero.businessexceptions.handler;

import lombok.Getter;
import lombok.ToString;
import org.apache.tomcat.jni.Local;

import java.time.LocalDateTime;

@Getter
public class MensajeError {

    private String excepcion;
    private String mensaje;
    private String path;
    private LocalDateTime timestamp;

    public MensajeError(Exception excepcion, String path) {
        this.excepcion = excepcion.getClass().getSimpleName();
        this.mensaje = excepcion.getMessage();
        this.path = path;
        this.timestamp = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return "MensajeError{" +
                "timestamp=" + timestamp +
                ", excepcion='" + excepcion + '\'' +
                ", mensaje='" + mensaje + '\'' +
                ", path='" + path + '\'' +
                '}';
    }
}
