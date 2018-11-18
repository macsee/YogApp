import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DBComponent } from "../../utils/dbComponent.jsx";
import CheckboxAsistencias from "./checkboxAsistencias";

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

  add_remove = data => {
    let items = this.state.lista_alumnos.map(object => ({ ...object }));

    items.map((row, i) => {
      if (row.alumno_pk == data.alumno) {
        row.presente = !row.presente;
      }
    });

    this.setState({ ...this.state, lista_alumnos_temp: items }, function() {
      let items_as = new FormData();

      if (!this.state.asistencias.has(data.alumno)) {
        console.log("Lo agrego..");
        items_as.set(data.alumno, JSON.stringify(data));
        this.setState({ ...this.state, asistencias: items_as });
      } else {
        console.log("Lo saco...");
        items_as.delete(data.alumno);
        this.setState({ ...this.state, asistencias: items_as });
      }
    });
  };

  save = () => {
    this.setState(
      {
        ...this.state,
        lista_alumnos: this.state.lista_alumnos_temp
      },
      function() {
        const db = new DBComponent();
        db.saveData("/asistencias/set", this.state.asistencias, "POST", x => {
          this.toggle();
        });
      }
    );
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.estado !== prevProps.estado) {
      // console.log(this.state.lista_alumnos);
      this.toggle();
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      lista_alumnos: this.props.data.lista_alumnos
    });
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
