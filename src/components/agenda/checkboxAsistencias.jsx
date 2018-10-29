import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class CheckboxAsistencias extends Component {
  state = {};

  formatDateComp = dia => {
    let month = dia.getMonth() + 1;
    let day = dia.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return dia.getFullYear() + "-" + month + "-" + day;
  };

  handleSubmit = event => {
    const formData = new FormData();

    formData.append("fecha", this.formatDateComp(new Date()));
    formData.append(
      "alumno",
      event.target.asistencia_ + this.props.data.alumno_pk
    );
    formData.append("clase_registro", this.props.clase);

    const db = new DBComponent();

    if (this.props.data.asist_pk) {
      console.log(
        "Estaba Presente.. Cambio condicion de presente a: ",
        event.target.checked
      );
      //   db.saveData("/asistencias/" + data.id_alumno, formData, "PUT", x => {
      //     //   callback(x);
      //   });
      // } else {
      //   db.saveData("/asistencias/" + data.id_alumno, formData, "POST", x => {
      //     // callback(x);
      //     // this.props.history.push(this.props.url_detalle + x.items.id + "/");
      //   });
    } else {
      console.log(
        "No estaba Presente.. Cambio condicion de presente a: ",
        event.target.checked
      );
      //   db.saveData("/asistencias/", formData, "POST", x => {
      //     console.log(x);
      //   });
    }
  };

  render() {
    return (
      <tr>
        <td className="txt-oflo">{this.props.data.alumno_pk} </td>
        <td>
          <span className="txt-oflo">{this.props.data.nombre}</span>
        </td>
        <td>
          <div className="custom-control custom-checkbox">
            <form id="formClase" name="formClase" className="m-t-40">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"asistencia_" + this.props.data.alumno_pk}
                name={"asistencia_" + this.props.data.alumno_pk}
                defaultValue={this.props.data.presente}
                onChange={this.handleSubmit}
              />
              <label
                className="custom-control-label todo-label"
                htmlFor={"asistencia_" + this.props.data.alumno_pk}
              />
            </form>
          </div>
        </td>
      </tr>
    );
  }
}

export default CheckboxAsistencias;
