import React, { Component } from "react";

class DetallePagos extends Component {
  state = {};

  setBadgeDesc = desc => {
    if (desc === "cuota") return "label label-rounded label-success";
    else if (desc === "deuda") return "label label-rounded label-danger";
    else if (desc === "taller") return "label label-rounded label-warning";
    else if (desc === "producto") return "label label-rounded label-info";
  };

  getDeuda = data => {
    var pagado = 0;
    var deuda = 0;
    // data.map((pago, i) => {
    //   deuda += parseInt(pago.debe);
    // });

    if (deuda < 0)
      return (
        <div className="col-xs-12 col-md-8 align-self-center display-6 text-success text-right">
          +$
          {deuda};
        </div>
      );
    else
      return (
        <div className="col-xs-12 col-md-8 align-self-center display-6 text-danger text-right">
          -$
          {deuda}
        </div>
      );
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Desde</label>
                <input type="date" className="form-control" defaultValue={""} />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Hasta</label>
                <input type="date" className="form-control" defaultValue={""} />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="control-label">Descripcion</label>
                <select
                  className="form-control custom-select"
                  data-placeholder="Choose a Category"
                  tabIndex="1"
                  defaultValue={this.state.value}
                >
                  <option value="0">Cuota</option>
                  <option value="1">Taller</option>
                  <option value="2">Producto</option>
                  <option value="3">Deuda</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body bg-light">
          <div className="row align-items-center">
            <div className="col-xs-12 col-md-4">
              <h3 className="m-b-0 font-light">Saldo:</h3>
              <span className="font-14 text-muted">A fecha 11/09/18</span>
            </div>
            {this.getDeuda(this.props.alumno.pagos)}
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">NRO</th>
                  <th className="border-top-0">FECHA</th>
                  <th className="border-top-0">ABONADO</th>
                  <th className="border-top-0">DEBE</th>
                  <th className="border-top-0">DESCRIPCION</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.props.alumno.pagos.map((pago, i) => {
                  return (
                    <tr key={i} onClick={this.click}>
                      <td className="txt-oflo">{pago.id} </td>
                      <td>
                        <span className="txt-oflo">{pago.fecha}</span>
                      </td>
                      <td>
                        <span className="txt-oflo">${pago.abonado}</span>
                      </td>
                      <td>
                        <span className="txt-oflo">${pago.debe}</span>
                      </td>
                      <td>
                        <span className={this.setBadgeDesc(pago.desc)}>
                          {pago.desc}
                        </span>
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DetallePagos;
