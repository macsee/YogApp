import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Contenido2 extends Component {
  verDetalle = id => {
    this.props.history.push("/clases/detalle/" + id);
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
                  onClick={() => this.verDetalle(row.pk)}
                >
                  <td className="txt-oflo">{row.pk} </td>
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
                      {row.profesor.apellido + ", " + row.profesor.nombre}
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

class Contenido1 extends Component {
  nuevaClase = () => {
    this.props.history.push("/clases/detalle/");
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="float-left">
            <h4 className="card-title mb-0">Clases</h4>
          </div>
          <div className="float-right">
            <button
              className="btn btn-info waves-effect waves-light"
              type="button"
              onClick={() => this.nuevaClase()}
            >
              <i className="mdi mdi-playlist-plus" /> Nuevo
            </button>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

class Clases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clasesData: null
    };
  }

  componentDidMount() {
    const dbAlumno = new DBComponent();
    dbAlumno.getData("http://localhost:8000/clases/", x => {
      this.setState({
        ...this.state,
        clasesData: x
      });
    });
  }

  render() {
    if (this.state.clasesData) {
      if (!this.state.clasesData.error) {
        return (
          <Contenido1 history={this.props.history}>
            <Contenido2
              data={this.state.clasesData.items}
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

export default Clases;
