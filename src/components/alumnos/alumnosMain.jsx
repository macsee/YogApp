import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
  MemoryRouter,
  Redirect
} from "react-router-dom";

class Alumnos extends Component {
  state = {
    redirect: false,
    id: ""
  };

  click = id => {
    this.setState({ redirect: true, id: id });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/alumnos/detalle/1" />;
    }
    return (
      <div className="card">
        <div className="card-body">
          <div className="float-left">
            <h4 className="card-title mb-0">Alumnos</h4>
          </div>
          <div className="float-right">
            <button
              className="btn btn-info waves-effect waves-light"
              type="button"
            >
              <i className="mdi mdi-playlist-plus" /> Nuevo
            </button>
          </div>
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
              <tr className="row-click" onClick={this.click}>
                <td className="txt-oflo">1 </td>
                <td>
                  <span className="txt-oflo">Juan Perez</span>
                </td>
                <td>
                  <span className="txt-oflo">0341-153631685</span>
                </td>
                <td>
                  <span className="label label-success label-rounded">
                    Activo
                  </span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td className="txt-oflo">2 </td>
                <td>
                  <span className="txt-oflo">Martin Suarez</span>
                </td>
                <td>
                  <span className="txt-oflo">0341-155123455</span>
                </td>
                <td>
                  <span className="label label-success label-rounded">
                    Activo
                  </span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td className="txt-oflo">3 </td>
                <td>
                  <span className="txt-oflo">Roberto Sanchez</span>
                </td>
                <td>
                  <span className="txt-oflo">0341-155758656</span>
                </td>
                <td>
                  <span className="label label-danger label-rounded">
                    Inactivo
                  </span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td className="txt-oflo">4 </td>
                <td>
                  <span className="txt-oflo">Esteban Quito</span>
                </td>
                <td>
                  <span className="txt-oflo">0341-152198765</span>
                </td>
                <td>
                  <span className="label label-success label-rounded">
                    Activo
                  </span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td className="txt-oflo">5 </td>
                <td>
                  <span className="txt-oflo">Jose Guardiola</span>
                </td>
                <td>
                  <span className="txt-oflo">0341-155123455</span>
                </td>
                <td>
                  <span className="label label-success label-rounded">
                    Activo
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Alumnos;
