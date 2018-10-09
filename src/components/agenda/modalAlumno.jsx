import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
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
            {this.props.data.length !== 0
              ? this.props.data.hora_inicio +
                " - " +
                this.props.data.profesor.nombre +
                " - " +
                this.props.data.nombre
              : ""}
          </ModalHeader>
          <ModalBody>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">#</th>
                  <th className="border-top-0">ALUMNO</th>
                  <th className="border-top-0">PRESENTE</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.length !== 0 ? (
                  this.props.data.listado_alumnos !== 0 ? (
                    this.props.data.lista_alumnos.map((row, i) => (
                      <tr key={i}>
                        <td className="txt-oflo">{row.pk} </td>
                        <td>
                          <span className="txt-oflo">{row.nombre}</span>
                        </td>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={"asistencia_" + row.pk}
                              name={"asistencia_" + row.pk}
                            />
                            <label
                              className="custom-control-label todo-label"
                              htmlFor={"asistencia_" + row.pk}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h2> No hay alumnos para esta clase</h2>
                  )
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>
              Guardar
            </Button>{" "}
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
