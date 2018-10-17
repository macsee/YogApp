import React, { Component } from "react";
import DetalleDatos from "./profesoresDetalleDatos";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Contenido extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {Object.keys(this.props.alumno).length !== 0
                  ? "Detalle Profesor " + this.props.alumno.pk
                  : "Nuevo Profesor"}
              </h4>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#datos"
                    role="tab"
                  >
                    <span className="hidden-xs-down">Datos</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="datos" role="tabpanel">
                  <div className="col-md-12">
                    <DetalleDatos
                      profesor={this.props.alumno}
                      especialidades={this.props.especialidades}
                      //   this.props.match.params.id === undefined
                      //     ? ""
                      //     : this.props.match.params.id
                      // }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProfesoresDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profesorData: null,
      especialidadesData: null
    };
  }

  componentDidMount() {
    const dbEspecialidades = new DBComponent();

    if (this.props.match.params.id) {
      const dbProfesor = new DBComponent();

      let url =
        "http://localhost:8000/profesores/" + this.props.match.params.id + "/";

      dbProfesor.getData(url, x => {
        this.setState({
          ...this.state,
          profesorData: x
        });
      });
    } else {
      this.setState({
        ...this.state,
        profesorData: { items: [] }
      });
    }

    dbEspecialidades.getData("http://localhost:8000/especialidades/", x => {
      this.setState({
        ...this.state,
        especialidadesData: x
      });
    });
  }

  render() {
    if (this.state.profesorData && this.state.especialidadesData) {
      if (
        this.state.profesorData.error ||
        this.state.especialidadesData.error
      ) {
        return <h2>Error de conexión</h2>;
      } else {
        return (
          <Contenido
            alumno={this.state.profesorData.items}
            especialidades={this.state.especialidadesData.items}
          />
        );
      }
    } else {
      return null;
    }
  }
}
export default ProfesoresDetalle;
