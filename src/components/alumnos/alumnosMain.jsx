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
  // constuctor() {
  //   this.goTo = this.goTo.bind(this);
  // }

  goTo = id => {
    this.props.history.push("/alumnos/detalle/" + id);
  };

  /* state = {
    redirect: false,
    id: ""
  };

  click = id => {
    this.setState({ redirect: true, id: id });
  };*/

  render() {
    /*if (this.state.redirect) {
      return <Redirect push to={"/alumnos/detalle/"+this.state.id} />;
    }*/
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
              <tr className="row-click" onClick={() => this.goTo(1)}>
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
              <tr className="row-click" onClick={() => this.gotTo(2)}>
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
              <tr className="row-click" onClick={() => this.gotTo(3)}>
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
              <tr className="row-click" onClick={() => this.gotTo(4)}>
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
              <tr className="row-click" onClick={() => this.gotTo(5)}>
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
