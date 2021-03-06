import React, { Component } from "react";

import DetalleDatos from "./alumnosDetalleDatos";
import DetallePagos from "./alumnosDetallePagos";
import DetalleAsistencias from "./alumnosDetalleAsistencias";

class AlumnosDetalle extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {this.props.match.params.id === undefined
                  ? "Nuevo Alumno"
                  : "Detalle Alumno " + this.props.match.params.id}
              </h4>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#datos"
                    role="tab"
                  >
                    <span className="hidden-xs-down">Datos</span>
                  </a>
                </li>
                {this.props.match.params.id !== undefined ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#pagos"
                        role="tab"
                      >
                        <span className="hidden-xs-down">Pagos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#asistencias"
                        role="tab"
                      >
                        <span className="hidden-xs-down">Asistencias</span>
                      </a>
                    </li>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="datos" role="tabpanel">
                  <div className="col-md-12">
                    <DetalleDatos
                      alumno={
                        this.props.match.params.id === undefined
                          ? ""
                          : this.props.match.params.id
                      }
                      history={this.props.history}
                    />
                  </div>
                </div>
                {this.props.match.params.id !== undefined ? (
                  <React.Fragment>
                    <div className="tab-pane" id="pagos" role="tabpanel">
                      <div className="col-md-12">
                        <DetallePagos
                          alumno={
                            this.props.match.params.id === undefined
                              ? ""
                              : this.props.match.params.id
                          }
                        />
                      </div>
                    </div>
                    <div className="tab-pane" id="asistencias" role="tabpanel">
                      <div className="col-md-12">
                        <DetalleAsistencias
                          alumno={
                            this.props.match.params.id === undefined
                              ? ""
                              : this.props.match.params.id
                          }
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumnosDetalle;
