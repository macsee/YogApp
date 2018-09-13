import React, { Component } from "react";

class DetalleDatos extends Component {
  state = {
    value: "2"
  };
  render() {
    console.log(this.props.alumno);
    return (
      <div className="card">
        <div className="card-body">
          <form className="m-t-40" action="#">
            <div className="form-body">
              <div className="row p-t-20">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Nombre</label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control"
                      placeholder=""
                      defaultValue={this.props.alumno.datos.nombre}
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
                      id="lastName"
                      className="form-control"
                      placeholder=""
                      defaultValue={this.props.alumno.datos.apellido}
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
                      className="form-control"
                      defaultValue={this.props.alumno.datos.fecha_nac}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">DNI</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={this.props.alumno.datos.dni}
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
                      className="form-control"
                      defaultValue={this.props.alumno.datos.direccion}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={this.props.alumno.datos.ciudad}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Telefono</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={this.props.alumno.datos.tel}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="control-label">Membresia</label>
                    <select
                      className="form-control custom-select"
                      data-placeholder="Choose a Category"
                      tabIndex="1"
                      defaultValue={this.props.alumno.datos.membresia}
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
                      className="form-control custom-select"
                      multiple
                      tabIndex="1"
                      defaultValue={this.props.alumno.datos.clases}
                    >
                      <option value="0">Lu - 08:00 - Noelia Perez</option>
                      <option value="1">Lu - 09:00 - Noelia Perez</option>
                      <option value="2">Lu - 09:00 - Noelia Perez</option>
                      <option value="3">Lu - 09:00 - Noelia Perez</option>
                      <option value="4">Lu - 09:00 - Noelia Perez</option>
                      <option value="5">Lu - 09:00 - Noelia Perez</option>
                      <option value="6">Lu - 09:00 - Noelia Perez</option>
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
                        name="estadoAlumno"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio11"
                      >
                        Activo
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="alumno_noactivo"
                        name="estadoAlumno"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio22"
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
