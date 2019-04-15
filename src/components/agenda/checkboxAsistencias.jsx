import React, { Component } from "react";
import * as utils from "../../utils/utils.js";

class CheckboxAsistencias extends Component {
  state = {
    checked: false
  };

  onClick = event => {
    // Esto lo tengo que hacer porque se propaga el onClick de agendaTabsContentRow,
    // entonces se ejecuta showModal() cada vez que se detecta un "click"
    event.stopPropagation();
  };

  onChange = event => {
    this.props.submit(this.props.data.alumno_pk);
  };

  // componentWillMount() {
  //   console.log(this.props.data);
  // }

  // componentWillUnmount() {
  //   this.setState({
  //     ...this.state,
  //     checked: this.state.checked
  //   });
  // }

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
                defaultChecked={this.props.data.presente}
                onChange={this.onChange}
                onClick={this.onClick}
                disabled={
                  this.props.data.fecha !== utils.formatDateComp(new Date())
                }
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
