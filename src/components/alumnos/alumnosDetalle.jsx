import React, { Component } from "react";

import DetalleDatos from "./alumnosDetalleDatos";
import DetallePagos from "./alumnosDetallePagos";
import DetalleAsistencias from "./alumnosDetalleAsistencias";

class AlumnosDetalle extends Component {
  state = {
    alumno: {
      "1": {
        datos: {
          nombre: "Juan",
          apellido: "Perez",
          fecha_nac: "1990-01-01",
          dni: "31340350",
          direccion: "San Juan 2717",
          ciudad: "Rosario",
          tel: "0341-153631685",
          membresia: "1",
          clases: [0, 2, 3]
        },
        pagos: [
          {
            id: 10,
            fecha: "2018-09-05",
            abonado: "500",
            debe: "400",
            desc: "cuota"
          },
          {
            id: 24,
            fecha: "2018-09-02",
            abonado: "100",
            debe: "300",
            desc: "deuda"
          },
          {
            id: 55,
            fecha: "2018-08-12",
            abonado: "200",
            debe: "0",
            desc: "taller"
          },
          {
            id: 87,
            fecha: "2018-08-03",
            abonado: "300",
            debe: "0",
            desc: "producto"
          },
          {
            id: 103,
            fecha: "2018-07-01",
            abonado: "500",
            debe: "200",
            desc: "cuota"
          }
        ],
        asistencias: {}
      }
    }
  };
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
                  <div className="col-md-12">
                    <DetalleDatos
                      alumno={this.state.alumno[this.props.match.params.id]}
                    />
                  </div>
                </div>
                <div className="tab-pane" id="pagos" role="tabpanel">
                  <div className="col-md-12">
                    <DetallePagos
                      alumno={this.state.alumno[this.props.match.params.id]}
                    />
                  </div>
                </div>
                <div className="tab-pane" id="asistencias" role="tabpanel">
                  <div className="col-md-12">
                    <DetalleAsistencias />
                  </div>
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
