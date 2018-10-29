import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class ProfesorDatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto_boton: "Guardar",
      clase_boton: "btn btn-success"
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nombre", event.target.nombre.value);
    formData.append("apellido", event.target.apellido.value);
    formData.append("dni", event.target.dni.value);
    formData.append("fecha_nac", event.target.fecha_nac.value);
    formData.append("tel", event.target.tel.value);

    const selectedValues = [...event.target.especialidad];
    selectedValues.forEach(elem => {
      elem.selected && formData.append("especialidad", elem.value);
    });

    this.setState({ ...this.state, texto_boton: "Guardando..." });

    this.props.submit(formData, x => {
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
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form
            id="formProfesor"
            name="formProfesor"
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Especialidad</label>
                    <select
                      id="especialidad"
                      name="especialidad"
                      className="form-control custom-select"
                      multiple
                      tabIndex="1"
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.especialidad
                          : []
                      }
                    >
                      {this.props.select.map((row, i) => (
                        <option key={i} value={row.id}>
                          {row.nombre}
                        </option>
                      ))}
                    </select>
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

export default ProfesorDatos;
