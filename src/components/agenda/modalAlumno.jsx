import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DBComponent } from "../../utils/dbComponent.jsx";
import CheckboxAsistencias from "./checkboxAsistencias";

class ModalAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      asistencias: new FormData(),
      clase: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  add_remove = data => {
    if (!this.state.asistencias.has(data.alumno)) {
      console.log("Lo agrego..");
      let items = this.state.asistencias;
      items.set(data.alumno, JSON.stringify(data));
      this.setState({ asistencias: items });
    } else {
      console.log("Lo saco...");
      let items = this.state.asistencias;
      items.delete(data.alumno);
      this.setState({ asistencias: items });
    }
    this.setState({ ...this.state, clase: data.clase_registro });
  };

  save = () => {
    const db = new DBComponent();
    db.saveData("/asistencias/set", this.state.asistencias, "POST", x => {
      this.toggle();
      this.fetch(this.state.clase);
    });
  };

  fetch = id => {
    const db = new DBComponent();
    db.getData("/clase_dia/" + id, x => {
      console.log(x);
    });
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.estado !== prevProps.estado) {
      this.toggle();
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {Object.keys(this.props.data).length !== 0
              ? this.props.data.hora_inicio +
                " - " +
                this.props.data.profesor_.nombre +
                " - " +
                this.props.data.nombre
              : ""}
          </ModalHeader>
          <ModalBody>
            {Object.keys(this.props.data).length !== 0 &&
            this.props.data.lista_alumnos.length !== 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="border-top-0">#</th>
                    <th className="border-top-0">ALUMNO</th>
                    <th className="border-top-0">ASISTENCIA</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.lista_alumnos.map((row, i) => (
                    <CheckboxAsistencias
                      key={i}
                      data={row}
                      clase={this.props.data.id}
                      submit={this.add_remove}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <h2> No hay alumnos para esta clase</h2>
            )}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-info" onClick={this.save}>
              Guardar
            </button>
            <Button color="secondary" onClick={this.toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAlumno;
