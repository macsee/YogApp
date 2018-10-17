import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Contenido2 extends Component {
  verDetalle = id => {
    this.props.history.push("/alumnos/detalle/" + id);
  };

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
                  onClick={() => this.verDetalle(row.pk)}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

class Contenido1 extends Component {
  nuevoAlumno = () => {
    this.props.history.push("/profesores/detalle/");
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="float-left">
            <h4 className="card-title mb-0">Profesores</h4>
          </div>
          <div className="float-right">
            <button
              className="btn btn-info waves-effect waves-light"
              type="button"
              onClick={() => this.nuevoAlumno()}
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
        {this.props.children}
      </div>
    );
  }
}

class Profesores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profesorData: null
    };
  }

  componentDidMount() {
    const dbProfesor = new DBComponent();
    dbProfesor.getData("http://localhost:8000/profesores/", x => {
      this.setState({
        ...this.state,
        profesorData: x
      });
    });
  }

  render() {
    if (this.state.profesorData) {
      if (!this.state.profesorData.error) {
        return (
          <Contenido1>
            <Contenido2
              data={this.state.profesorData.items}
              history={this.props.history}
            />
          </Contenido1>
        );
      } else {
        return <h2> Error de conexion</h2>;
      }
    } else {
      return null;
    }
  }
}

export default Profesores;
