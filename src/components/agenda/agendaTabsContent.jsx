import React, { Component } from "react";
import ModalAlumno from "./modalAlumno";
import { DBComponent } from "../../utils/dbComponent";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      data: []
    };
    // this.child = React.createRef();
  }

  setBadge = row => {
    let restante = row.cupo - row.lista_alumnos.length;
    let badge = " badge-success";

    if (restante <= row.cupo / 2 && restante >= row.cupo / 3)
      badge = " badge-warning";
    if (restante <= row.cupo / 3) badge = " badge-danger";
    return badge;
  };

  showModal = row => {
    this.setState({ ...this.state, value: !this.state.value, data: row });
  };
  // showModal = id => {
  //   this.child.current.toggle(id);
  // };

  render() {
    if (Object.keys(this.props.data).length === 0) {
      return <h2>No hay datos</h2>;
    } else {
      return (
        <React.Fragment>
          <div>
            <ModalAlumno estado={this.state.value} data={this.state.data} />
          </div>
          <div className="card">
            <div className="card-body">
              <div className="float-left">
                <h4 className="card-title mb-0">Clases</h4>
              </div>
              <div className="float-right">
                <button
                  className="btn btn-info waves-effect waves-light"
                  type="button"
                >
                  <i className="mdi mdi-playlist-plus" /> Agregar
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="border-top-0">HORARIO</th>
                    <th className="border-top-0">PROFESOR</th>
                    <th className="border-top-0">GRUPO</th>
                    <th className="border-top-0">CUPO</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map((row, i) => (
                    <tr
                      key={i}
                      onClick={() => this.showModal(row)}
                      className="row-click"
                    >
                      <td className="txt-oflo">
                        {row.hora_inicio} <br /> {row.hora_fin}
                      </td>
                      <td>
                        <span className="txt-oflo">{row.profesor_.nombre}</span>
                      </td>
                      <td>
                        <span className="txt-oflo">{row.nombre}</span>
                      </td>
                      <td>
                        <h4>
                          <span
                            className={"badge badge-pill" + this.setBadge(row)}
                          >
                            {row.cupo - row.lista_alumnos.length}
                          </span>
                        </h4>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

class AgendaTabsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null
    };
  }

  getClases = dia => {
    const db = new DBComponent();
    db.getData("/clase_dia/?fecha=" + dia, x => {
      this.setState({
        ...this.state,
        resultData: x
      });
    });
  };

  componentDidMount() {
    this.getClases(this.props.dia);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dia !== prevProps.dia) {
      this.getClases(this.props.dia);
    }
  }

  render() {
    if (this.state.resultData) {
      if (this.state.resultData.error) {
        return <h2>Error de conexion</h2>;
      } else {
        return <Contenido data={this.state.resultData.items} />;
      }
    } else {
      return null;
    }
  }
}

export default AgendaTabsContent;
