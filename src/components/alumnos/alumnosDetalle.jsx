import React, { Component } from "react";
import DetalleDatos from "./alumnosDetalleDatos";
import DetallePagos from "./alumnosDetallePagos";
import DetalleAsistencias from "./alumnosDetalleAsistencias";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Contenido extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {Object.keys(this.props.main).length !== 0
                  ? "Detalle Alumno " + this.props.main.pk
                  : "Nuevo Alumno"}
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
                {Object.keys(this.props.main).length !== 0 ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#pagos"
                        role="tab"
                      >
                        <span className="hidden-xs-down">Pagos</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#asistencias"
                        role="tab"
                      >
                        <span className="hidden-xs-down">Asistencias</span>
                      </a>
                    </li>
                  </React.Fragment>
                ) : null}
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="datos" role="tabpanel">
                  <div className="col-md-12">
                    <DetalleDatos
                      main={this.props.main}
                      select={this.props.select}
                      url_main={this.props.url_main}
                      url_select={this.props.url_select}

                      //   this.props.match.params.id === undefined
                      //     ? ""
                      //     : this.props.match.params.id
                      // }
                    />
                  </div>
                </div>
                {Object.keys(this.props.main).length !== 0 ? (
                  <React.Fragment>
                    <div className="tab-pane" id="pagos" role="tabpanel">
                      <div className="col-md-12">
                        <DetallePagos
                          pagos={this.props.pagos}
                          // alumno={
                          //   this.props.match.params.id === undefined
                          //     ? ""
                          //     : this.props.match.params.id
                          // }
                        />
                      </div>
                    </div>
                    <div className="tab-pane" id="asistencias" role="tabpanel">
                      <div className="col-md-12">
                        <DetalleAsistencias
                          asistencias={this.props.asistencias}
                          // alumno={
                          //   this.props.match.params.id === undefined
                          //     ? ""
                          //     : this.props.match.params.id
                          // }
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AlumnosDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null,
      selectData: null,
      asistencias: {},
      pagos: {}
    };
  }

  componentDidMount() {
    const dbSelect = new DBComponent();

    if (this.props.match.params.id) {
      const dbMain = new DBComponent();

      let url = this.props.url_main + this.props.match.params.id + "/";

      dbMain.getData(url, x => {
        this.setState({
          ...this.state,
          resultData: x
        });
      });
    } else {
      this.setState({
        ...this.state,
        resultData: { items: [] }
      });
    }

    dbSelect.getData(this.props.url_select, x => {
      this.setState({
        ...this.state,
        selectData: x
      });
    });
  }

  render() {
    if (this.state.resultData && this.state.selectData) {
      if (this.state.resultData.error || this.state.selectData.error) {
        return <h2>Error de conexión</h2>;
      } else {
        return (
          <Contenido
            main={this.state.resultData.items}
            select={this.state.selectData.items}
            asistencias={this.state.asistencias}
            pagos={this.state.pagos}
          />
        );
      }
    } else {
      return null;
    }
  }
}
export default AlumnosDetalle;
