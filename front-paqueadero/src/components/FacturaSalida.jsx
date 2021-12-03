import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "bootstrap-icons/font/bootstrap-icons.css";

export const FacturaSalida = ({ factura }) => {
  return (
    <Fragment>
      {console.log(factura)}
      <div className="bg-light container bootdey">
        <div className="row">
          <div className="">
            <div className="widget-box">
              <div className="widget-header widget-header-large">
                <h3 className="widget-title grey lighter">
                  <i className="bi bi-geo-alt-fill"></i>
                  Paqueadero Sofka
                </h3>

                <div className="text-left mb-3">
                  <span className="invoice-info-label">Facura:</span>
                  <span className="red">#{factura.idMovimiento}</span>

                  <br />
                  <span className="invoice-info-label">Fecha Generación: </span>
                  <span className="blue">
                    {new Date().toJSON().slice(0, 19).replace(/T/g, " ")}
                  </span>
                </div>

                <div className="widget-toolbar hidden-480">
                  <a href="#">
                    <i className="ace-icon fa fa-print"></i>
                  </a>
                </div>
              </div>

              <div className="widget-body">
                <div className="widget-main padding-24">
                  <div className="row">
                    <div className="w-50">
                      <div className="">
                        <div className="col-xs-11 label label-lg label-info arrowed-in arrowed-right">
                          <b>Responsables Antonio - Julian</b>
                        </div>
                      </div>

                      <div>
                        <ul className="list-unstyled spaced">
                          <li>
                            <i className="ace-icon fa fa-caret-right blue"></i>
                            Medellin, Antioquia
                          </li>

                          <li>
                            <i className="ace-icon fa fa-caret-right blue"></i>
                            Phone:
                            <b className="red"> 300 390 8912</b>
                          </li>
                          <li className="divider"></li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-50">
                      <div className="row">
                        <div className="col-xs-11 label label-lg label-success arrowed-in arrowed-right">
                          <b>Datos Vehículo</b>
                        </div>
                      </div>

                      <div>
                        <ul className="list-unstyled  spaced">
                          <li>
                            <i className="ace-icon fa fa-caret-right green"></i>
                            Placa: {factura.vehiculoDTO.placa}
                          </li>

                          <li>
                            <i className="ace-icon fa fa-caret-right green"></i>
                            Marca: {factura.vehiculoDTO.marca}
                          </li>

                          <li>
                            <i className="ace-icon fa fa-caret-right green"></i>
                            Color: {factura.vehiculoDTO.color}
                          </li>

                          <li className="divider"></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space"></div>

                  <div>
                    <table className="table  p-5">
                      <thead>
                        <tr>
                          <th className="center">#</th>
                          <th>TARIFA</th>
                          <th className="hidden-xs">VALOR</th>
                          <th className="hidden-480">TIPO COBRO</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="center">1</td>

                          <td>{factura.tarifaDTO.nombre}</td>
                          <td className="hidden-xs">
                            {factura.tarifaDTO.valor}
                          </td>
                          <td className="hidden-480"> Hora </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <table className="table p-5">
                      <thead>
                        <tr>
                          <th className="center">#</th>
                          <th>ACCIÓN</th>
                          <th className="hidden-xs">FECHA</th>
                          <th className="hidden-480">ESTADO</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="center">1</td>

                          <td>Ingreso Vehiculo</td>
                          <td className="hidden-xs">
                            {factura.fechaIngreso
                              .slice(0, 19)
                              .replace(/T/g, " ")}
                          </td>
                          <td className="hidden-480"> Sin Novedad </td>
                        </tr>

                        <tr>
                          <td className="center">2</td>

                          <td>Salida Vehiculo</td>
                          <td className="hidden-xs">
                            {factura.fechaSalida
                              .slice(0, 19)
                              .replace(/T/g, " ")}
                          </td>
                          <td className="hidden-480"> Sin Novedad </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="row">
                    <div className="col-sm-5 text-left">
                      <h4 className="pull-right">
                        Horas Transcurridas:
                        <span className="red">
                          {factura.tiempoAPagarHoras} horas
                        </span>
                      </h4>
                      <h4 className="pull-right">
                        Total A Pagar:
                        <span className="red">{factura.valorPago}$</span>
                      </h4>
                    </div>
                  </div>
                  <div className="space-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
