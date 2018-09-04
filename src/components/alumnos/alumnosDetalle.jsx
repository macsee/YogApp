import React, { Component } from "react";

import DetalleDatos from "./alumnosDetalleDatos";
import DetallePagos from "./alumnosDetallePagos";
import DetalleAsistencias from "./alumnosDetalleAsistencias";

class AlumnosDetalle extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                Alumno #{this.props.match.params.id}
              </h4>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {/* Alumno #{this.props.match.params.id} */}
              </h4>
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
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="datos" role="tabpanel">
                  <DetalleDatos />
                </div>
                <div className="tab-pane" id="pagos" role="tabpanel">
                  <DetallePagos />
                </div>
                <div className="tab-pane" id="asistencias" role="tabpanel">
                  <DetalleAsistencias />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumnosDetalle;
