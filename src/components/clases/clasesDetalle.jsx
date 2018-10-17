import React, { Component } from "react";
import DetalleDatos from "./clasesDetalleDatos";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Contenido extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {Object.keys(this.props.clase).length !== 0
                  ? "Detalle Clase " + this.props.clase.pk
                  : "Nueva Clase"}
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
                      profesores={this.props.profesores}
                      clase={this.props.clase}
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

class ClasesDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claseData: null,
      profesoresData: null
    };
  }

  componentDidMount() {
    const dbProfesores = new DBComponent();

    if (this.props.match.params.id) {
      const dbClase = new DBComponent();

      let url =
        "http://localhost:8000/clases/" + this.props.match.params.id + "/";

      dbClase.getData(url, x => {
        this.setState({
          ...this.state,
          claseData: x
        });
      });
    } else {
      this.setState({
        ...this.state,
        claseData: { items: [] }
      });
    }

    dbProfesores.getData("http://localhost:8000/profesores/", x => {
      this.setState({
        ...this.state,
        profesoresData: x
      });
    });
  }

  render() {
    if (this.state.claseData && this.state.profesoresData) {
      if (this.state.claseData.error || this.state.profesoresData.error) {
        return <h2>Error de conexión</h2>;
      } else {
        return (
          <Contenido
            profesores={this.state.profesoresData.items}
            clase={this.state.claseData.items}
          />
        );
      }
    } else {
      return null;
    }
  }
}
export default ClasesDetalle;
