import React, { Component } from "react";

class ClaseDatos extends Component {
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
    formData.append("dia", event.target.dia.value);
    formData.append("hora_inicio", event.target.hora_inicio.value);
    formData.append("hora_fin", event.target.hora_fin.value);
    formData.append("profesor", event.target.profesor.value);
    formData.append("cupo", event.target.cupo.value);

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
            id="formClase"
            name="formClase"
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
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="control-label">Dia</label>
                    <select
                      name="dia"
                      id="dia"
                      className="form-control custom-select"
                      data-placeholder=""
                      tabIndex="1"
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.dia
                          : ""
                      }
                    >
                      <option value="LU">Lunes</option>
                      <option value="MA">Martes</option>
                      <option value="MI">Miercoles</option>
                      <option value="JU">Jueves</option>
                      <option value="VI">Viernes</option>
                      <option value="SA">Sabado</option>
                      <option value="DO">Domingo</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="control-label">Hora Inicio</label>
                    <select
                      name="hora_inicio"
                      id="hora_inicio"
                      className="form-control custom-select"
                      data-placeholder=""
                      tabIndex="1"
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.hora_inicio
                          : ""
                      }
                    >
                      <option value="08:00">08:00</option>
                      <option value="08:30">08:30</option>
                      <option value="09:00">09:00</option>
                      <option value="09:30">09:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="control-label">Hora Fin</label>
                    <select
                      name="hora_fin"
                      id="hora_fin"
                      className="form-control custom-select"
                      data-placeholder=""
                      tabIndex="1"
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.hora_fin
                          : ""
                      }
                    >
                      <option value="08:00">08:00</option>
                      <option value="08:30">08:30</option>
                      <option value="09:00">09:00</option>
                      <option value="09:30">09:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Profesor</label>
                    <select
                      id="profesor"
                      name="profesor"
                      className="form-control custom-select"
                      tabIndex="1"
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.profesor_
                          : ""
                      }
                    >
                      {this.props.select.map((row, i) => (
                        <option key={i} value={row.id}>
                          {row.apellido + ", " + row.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cupo</label>
                    <input
                      type="number"
                      name="cupo"
                      id="cupo"
                      className="form-control"
                      placeholder=""
                      defaultValue={
                        Object.keys(this.props.main).length !== 0
                          ? this.props.main.cupo
                          : "10"
                      }
                    />
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

export default ClaseDatos;
