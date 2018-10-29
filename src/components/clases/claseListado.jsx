import React, { Component } from "react";

class ClaseListado extends Component {
  render() {
    if (Object.keys(this.props.data).length === 0) {
      return <h2>No hay datos</h2>;
    } else {
      return (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="border-top-0">#</th>
                <th className="border-top-0">DIA</th>
                <th className="border-top-0">HORA INICIO</th>
                <th className="border-top-0">HORA FIN</th>
                <th className="border-top-0">PROFESOR</th>
                <th className="border-top-0">NOMBRE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((row, i) => (
                <tr
                  key={i}
                  className="row-click"
                  onClick={() => this.props.detalle(row.id)}
                >
                  <td className="txt-oflo">{row.id} </td>
                  <td>
                    <span className="txt-oflo">{row.dia}</span>
                  </td>
                  <td>
                    <span className="txt-oflo">{row.hora_inicio}</span>
                  </td>
                  <td>
                    <span className="txt-oflo">{row.hora_fin}</span>
                  </td>
                  <td>
                    <span className="txt-oflo">
                      {row.profesor_.apellido + ", " + row.profesor_.nombre}
                    </span>
                  </td>
                  <td>
                    <span className="txt-oflo">{row.nombre}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default ClaseListado;
