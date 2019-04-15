import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DBComponent } from "../../utils/dbComponent.jsx";
import CheckboxAsistencias from "./checkboxAsistencias";
import * as utils from "../../utils/utils.js";

class ModalAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      lista_alumnos: [],
      lista_alumnos_temp: [],
      asistencias: new FormData(),
      clase: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      ...this.state,
      modal: !this.state.modal
    });
  }

  add_remove = alumno => {
    let items = this.state.lista_alumnos_temp.map(e => {
      if (e.alumno_pk === alumno) {
        e = {
          ...e,
          presente: !e.presente
        };
      }
      return e;
    });

    this.setState({ ...this.state, lista_alumnos_temp: items });
  };

  save = () => {
    this.setState(
      {
        ...this.state,
        lista_alumnos: this.state.lista_alumnos_temp
      },
      function() {
        let items_as = new FormData();
        this.state.lista_alumnos_temp.map(e => {
          items_as.append(e.alumno_pk, JSON.stringify(e));
        });
        const db = new DBComponent();
        db.saveData("/asistencias/set", items_as, "POST", x => {
          this.toggle();
        });
      }
    );
  };

  reload_alumnos = () => {
    let items = this.props.data.lista_alumnos.map(e => {
      e = {
        ...e,
        fecha: this.props.data.fecha,
        clase_registro: this.props.data.id
      };
      return e;
    });

    this.setState({
      ...this.state,
      lista_alumnos: items,
      lista_alumnos_temp: items
    });
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.estado !== prevProps.estado) {
      this.toggle();
    }

    if (this.props.data.fecha !== prevProps.data.fecha) {
      this.reload_alumnos();
    }
  }

  componentDidMount() {
    this.reload_alumnos();
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
            {this.state.lista_alumnos &&
            this.state.lista_alumnos.length !== 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="border-top-0">#</th>
                    <th className="border-top-0">ALUMNO</th>
                    <th className="border-top-0">ASISTENCIA</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.lista_alumnos.map((row, i) => (
                    <CheckboxAsistencias
                      key={i}
                      data={row}
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
            <button
              className="btn btn-info"
              onClick={this.save}
              disabled={
                this.props.data.fecha !== utils.formatDateComp(new Date())
              }
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
