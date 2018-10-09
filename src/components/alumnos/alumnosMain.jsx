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
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

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

  componentDidMount() {
    fetch("http://localhost:8000/alumnos/", {})
      .then(res => res.json())
      .then(
        result => {
          this.setState({ ...this.state, isLoaded: true, items: result });
        },
        error => {
          this.setState({ ...this.state, isLoaded: true, error });
        }
      );
  }

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
        {this.state.error ? <h2> Error </h2> : ""}
        {this.state.items.length === 0 ? (
          <h2> No hay alumnos </h2>
        ) : (
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
                {this.state.items.map((row, i) => (
                  <tr
                    key={i}
                    className="row-click"
                    onClick={() => this.goTo(row.pk)}
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
                      <span className="label label-success label-rounded">
                        Activo
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Alumnos;
