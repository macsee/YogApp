import React, { Component } from "react";

class AlumnoListado extends Component {
  render() {
    if (Object.keys(this.props.data).length === 0) {
      return <h2>No hay datos</h2>;
    } else {
      return (
        <div>
          <div className="card-body">
            <form className="m-t-20 form-horizontal">
              <div className="form-group row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputHorizontalSuccess"
                    placeholder="Apellido"
                  />
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">#</th>
                  <th className="border-top-0">NOMBRE</th>
                  <th className="border-top-0">TEL</th>
                  <th className="border-top-0">ESTADO</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map((row, i) => (
                  <tr
                    key={i}
                    className="row-click"
                    onClick={() => this.props.detalle(row.pk)}
                  >
                    <td className="txt-oflo">{row.pk} </td>
                    <td>
                      <span className="txt-oflo">
                        {row.nombre + " " + row.apellido}
                      </span>
                    </td>
                    <td>
                      <span className="txt-oflo">{row.tel}</span>
                    </td>
                    <td>
                      {row.activo ? (
                        <span className="label label-success label-rounded">
                          Activo
                        </span>
                      ) : (
                        <span className="label label-danger label-rounded">
                          Inactivo
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default AlumnoListado;
