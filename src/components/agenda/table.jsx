import React, { Component } from "react";
import ModalAlumno from "./modalAlumno";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      data: []
    };
    // this.child = React.createRef();
  }

  // showModal = id => {
  //   this.child.current.toggle(id);
  // };

  render() {
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
                    onClick={() =>
                      this.setState({
                        value: !this.state.value,
                        data: row
                      })
                    }
                    // onClick={() => this.showModal(row.pk)}
                    className="row-click"
                  >
                    <td className="txt-oflo">{row.hora_inicio}</td>
                    <td>
                      <span className="txt-oflo">{row.profesor.nombre}</span>
                    </td>
                    <td>
                      <span className="txt-oflo">{row.nombre}</span>
                    </td>
                    <td>
                      <h4>
                        <span className="badge badge-pill badge-success">
                          7
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

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/clase_dia/?dia=" + this.props.dia, {})
      .then(res => res.json())
      .then(
        result => {
          this.setState({ ...this.state, isLoaded: true, items: result });
        },
        error => {
          console.log(error);
          this.setState({ ...this.state, isLoaded: true, error });
        }
      );
  }

  render() {
    if (this.state.items.length !== 0) {
      return <TableContent data={this.state.items} />;
    } else if (this.state.items.length === 0) {
      return <h2>No hay datos para la fecha</h2>;
    } else {
      return <h2>Error de conexion</h2>;
    }
  }
}

export default Table;
