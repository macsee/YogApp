import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Contenido2 extends Component {
  verDetalle = id => {
    console.log(this.props);
    this.props.history.push(this.props.url_detalle + id);
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
                <th className="border-top-0">ESTADO</th>
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
      );
    }
  }
}

class Contenido1 extends Component {
  nuevo = () => {
    this.props.history.push(this.props.url_nuevo);
  };

  render() {
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
              onClick={() => this.nuevo()}
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

class Alumnos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null
    };
  }

  componentDidMount() {
    const db = new DBComponent();
    db.getData(this.props.url, x => {
      this.setState({
        ...this.state,
        resultData: x
      });
    });
  }

  render() {
    if (this.state.resultData) {
      if (!this.state.resultData.error) {
        return (
          <Contenido1
            history={this.props.history}
            url_nuevo={this.props.url_nuevo}
          >
            <Contenido2
              data={this.state.resultData.items}
              history={this.props.history}
              url_detalle={this.props.url_detalle}
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

export default Alumnos;
