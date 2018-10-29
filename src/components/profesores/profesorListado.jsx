import React, { Component } from "react";

class ProfesorListado extends Component {
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
                <th className="border-top-0">NOMBRE</th>
                <th className="border-top-0">TEL</th>
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
                    <span className="txt-oflo">
                      {row.nombre + " " + row.apellido}
                    </span>
                  </td>
                  <td>
                    <span className="txt-oflo">{row.tel}</span>
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

export default ProfesorListado;
