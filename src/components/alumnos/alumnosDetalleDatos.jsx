import React, { Component } from "react";

class DetalleDatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      alumno: [],
      clases: []
    };
  }

  getClasesData = () => {
    fetch("http://localhost:8000/clases/", {})
      .then(res => res.json())
      .then(
        result => {
          this.setState({ ...this.state, isLoaded: true, clases: result });
        },
        error => {
          this.setState({ ...this.state, isLoaded: true, error });
        }
      );
  };

  getAlumnosData = id => {
    fetch("http://localhost:8000/alumnos/" + id + "/", {})
      .then(res => res.json())
      .then(
        result => {
          this.setState({ ...this.state, isLoaded: true, alumno: result });
          this.getClasesData();
        },
        error => {
          this.setState({ ...this.state, isLoaded: true, error });
        }
      );
  };

  handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nombre", event.target.nombre.value);
    formData.append("apellido", event.target.apellido.value);
    formData.append("dni", event.target.dni.value);
    formData.append("fecha_nac", event.target.fecha_nac.value);
    formData.append("tel", event.target.tel.value);

    let selectElement = document.getElementById("clases");
    let selectedValues = Array.from(selectElement.selectedOptions).map(
      option => option.value
    );

    formData.append("clases", selectedValues);

    fetch("http://localhost:8000/alumnos/" + this.props.alumno + "/", {
      method: "PUT",
      body: formData
    })
      .then(res => res.json())
      .then(result => console.log(result), error => console.log(error));
  };

  componentDidMount() {
    this.getAlumnosData(this.props.alumno);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form
            id="myForm"
            name="myForm"
            className="m-t-40"
            onSubmit={this.handleSubmit}
          >
            <div className="form-body">
              <div className="row p-t-20">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      className="form-control"
                      placeholder=""
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.nombre
                          : ""
                      }
                      required
                    />

                    {/* <small className="form-control-feedback">
                          This is inline help
                        </small> */}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group has-danger">
                    <label className="control-label">Apellido</label>
                    <input
                      type="text"
                      name="apellido"
                      id="apellido"
                      className="form-control"
                      placeholder=""
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.apellido
                          : ""
                      }
                      required
                    />
                    {/* <small className="form-control-feedback">
                          This field has error.
                        </small> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      name="fecha_nac"
                      id="fecha_nac"
                      className="form-control"
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.fecha_nac
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">DNI</label>
                    <input
                      type="text"
                      name="dni"
                      id="dni"
                      className="form-control"
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.dni
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Direccion</label>
                    <input
                      type="text"
                      name="direccion"
                      id="direccion"
                      className="form-control"
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.direccion
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      className="form-control"
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.ciudad
                          : "Rosario"
                      }
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Telefono</label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      className="form-control"
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.tel
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="control-label">Membresia</label>
                    <select
                      name="membresia"
                      id="membresia"
                      className="form-control custom-select"
                      data-placeholder="Choose a Category"
                      tabIndex="1"
                      defaultValue={
                        this.state.alumno.length !== 0
                          ? this.state.alumno.membresia
                          : ""
                      }
                    >
                      <option value="0">Sin Cargo</option>
                      <option value="1">1 x Semana</option>
                      <option value="2">2 x Semana</option>
                      <option value="3">3 x Semana</option>
                      <option value="4">4 x Semana</option>
                      <option value="5">5 x Semana</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Clases</label>
                    <select
                      id="clases"
                      name="clases"
                      className="form-control custom-select"
                      multiple={true}
                      tabIndex="1"
                    >
                      {this.state.clases.map((row, i) => (
                        <option
                          key={i}
                          value={row.pk}
                          selected={this.state.alumno.clases.includes(row.pk)}
                        >
                          {row.dia +
                            " - " +
                            row.hora_inicio +
                            " - " +
                            row.profesor_.nombre +
                            ", " +
                            row.profesor_.apellido +
                            " - " +
                            row.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="control-label">Estado</label>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="alumno_activo"
                        name="alumnoEstado"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="alumno_activo"
                      >
                        Activo
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="alumno_noactivo"
                        name="alumnoEstado"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="alumno_noactivo"
                      >
                        No Activo
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-actions">
                  <button className="btn btn-success" type="submit">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DetalleDatos;
