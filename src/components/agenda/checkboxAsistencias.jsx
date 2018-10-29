import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class CheckboxAsistencias extends Component {
  state = {};

  handleSubmit = event => {
    const formData = new FormData();

    formData.append("fecha", "");
    formData.append("alumno", this.props.data.id_alumno);
    formData.append("clase_registro", this.props.clase);

    const db = new DBComponent();

    if (this.props.data.id_asistencia !== "") {
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
      db.saveData("/asistencias/", formData, "POST", x => {
        console.log(x);
      });
    }
  };

  render() {
    return (
      <tr>
        <td className="txt-oflo">{this.props.data.id_alumno} </td>
        <td>
          <span className="txt-oflo">{this.props.data.nombre}</span>
        </td>
        <td>
          <div className="custom-control custom-checkbox">
            <form id="formClase" name="formClase" className="m-t-40">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"asistencia_" + this.props.data.id_alumno}
                name={"asistencia_" + this.props.data.id_alumno}
                defaultValue={this.props.data.presente}
                onChange={this.handleSubmit}
              />
              <label
                className="custom-control-label todo-label"
                htmlFor={"asistencia_" + this.props.data.id_alumno}
              />
            </form>
          </div>
        </td>
      </tr>
    );
  }
}

export default CheckboxAsistencias;
