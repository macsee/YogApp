import React, { Component } from "react";
import { DBComponent } from "../../utils/dbComponent.jsx";

class CheckboxAsistencias extends Component {
  state = {
    checked: false
  };

  formatDateComp = dia => {
    let month = dia.getMonth() + 1;
    let day = dia.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return dia.getFullYear() + "-" + month + "-" + day;
  };

  onClick = event => {
    // Esto lo tengo que hacer porque se propaga el onClick de agendaTabsContentRow,
    // entonces se ejecuta showModal() cada vez que se detecta un "click"
    event.stopPropagation();
  };

  onChange = event => {
    let array = {
      fecha: this.formatDateComp(new Date()),
      alumno: this.props.data.alumno_pk,
      clase_registro: this.props.clase,
      id: this.props.data.asist_pk
    };

    this.props.submit(array);
  };

  componentDidMount() {
    console.log("Monto");
    this.setState({
      ...this.state,
      checked: this.props.data.asist_pk
    });
  }

  componentWillUnmount() {
    // Remember state for the next mount
    this.setState({
      ...this.state,
      checked: this.state.checked
    });
  }

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
                defaultChecked={this.state.checked || this.props.data.presente}
                onChange={this.onChange}
                onClick={this.onClick}
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
