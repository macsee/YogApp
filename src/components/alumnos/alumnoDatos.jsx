import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class AlumnoDatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto_boton: "Guardar",
      clase_boton: "btn btn-success"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const db = new DBComponent();
    this.setState({ ...this.state, texto_boton: "Guardando..." });

    const formData = new FormData();
    formData.append("nombre", event.target.nombre.value);
    formData.append("apellido", event.target.apellido.value);
    formData.append("dni", event.target.dni.value);
    formData.append("fecha_nac", event.target.fecha_nac.value);
    formData.append("tel", event.target.tel.value);
    formData.append("activo", event.target.alumno_activo.checked);

    const selectedValues = [...event.target.clases];
    selectedValues.forEach(elem => {
      elem.selected && formData.append("clases", elem.value);
    });

    if (Object.keys(this.props.main).length !== 0) {
      db.saveData(
        this.props.url_main + this.props.main.pk + "/",
        formData,
        "PUT",
        x => {
          if (x.error) {
            this.setState({
              ...this.state,
              texto_boton: "ERROR!",
              clase_boton: "btn btn-danger"
            });
          } else {
            this.setState({
              ...this.state,
              texto_boton: "Guardar",
              clase_boton: "btn btn-success"
            });
          }
        }
      );
    } else {
      db.saveData(this.props.url_main, formData, "POST", x => {
        if (x.error) {
          this.setState({
            ...this.state,
            texto_boton: "ERROR!",
            clase_boton: "btn btn-danger"
          });
        } else {
          this.props.history.push(this.props.url_main + x.pk + "/");
          this.setState({
            ...this.state,
            texto_boton: "Guardar",
            clase_boton: "btn btn-success"
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form
            id="formAlumno"
            name="formAlumno"
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.nombre
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.apellido
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.fecha_nac
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.dni
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.direccion
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.ciudad
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.tel
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
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.membresia
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
                      multiple
                      tabIndex="1"
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.clases
                          : []
                      }
                    >
                      {this.props.select.map((row, i) => (
                        <option key={i} value={row.pk}>
                          {row.dia +
                            " - " +
                            row.hora_inicio +
                            " - " +
                            row.profesor.nombre +
                            ", " +
                            row.profesor.apellido +
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
                        defaultChecked={
                          Object.keys(this.props.main).length !== 0
                            ? this.props.main.activo
                            : true
                        }
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
                        defaultChecked={
                          Object.keys(this.props.main).length !== 0
                            ? !this.props.main.activo
                            : false
                        }
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
                  <button className={this.state.clase_boton} type="submit">
                    {this.state.texto_boton}
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

export default AlumnoDatos;
