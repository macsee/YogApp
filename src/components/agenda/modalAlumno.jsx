import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DBComponent } from "../../utils/dbComponent.jsx";
import CheckboxAsistencias from "./checkboxAsistencias";

class ModalAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

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
                    <CheckboxAsistencias key={i} data={row} />
                  ))}
                </tbody>
              </table>
            ) : (
              <h2> No hay alumnos para esta clase</h2>
            )}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-info"
              onClick={this.toggle}
              type="submit"
            >
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
