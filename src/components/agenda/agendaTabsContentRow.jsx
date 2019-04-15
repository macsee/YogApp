import React, { Component } from "react";
import ModalAlumno from "./modalAlumno";

class AgendaTabsRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      data: null,
      lista_alumnos: null
    };
  }

  setBadge = () => {
    let restante = this.state.data.cupo - this.state.lista_alumnos.length;
    let badge = " badge-success";

    if (
      restante <= this.state.data.cupo / 2 &&
      restante >= this.state.data.cupo / 3
    )
      badge = " badge-warning";
    if (restante <= this.state.data.cupo / 3) badge = " badge-danger";
    return badge;
  };

  showModal = event => {
    this.setState({
      ...this.state,
      value: !this.state.value
    });
  };

  componentDidMount() {
    if (Object.keys(this.props.data).length !== 0) {
      this.setState({
        ...this.state,
        lista_alumnos: this.props.data.lista_alumnos,
        data: this.props.data
      });
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data.fecha !== prevProps.data.fecha) {
      this.setState({
        ...this.state,
        lista_alumnos: this.props.data.lista_alumnos,
        data: this.props.data
      });
    }
  }

  render() {
    return (
      this.state.data && (
        <tr onClick={this.showModal} className="row-click">
          <td className="txt-oflo">
            {this.state.data.hora_inicio} <br /> {this.state.data.hora_fin}
          </td>
          <td>
            <span className="txt-oflo">{this.state.data.profesor_.nombre}</span>
          </td>
          <td>
            <span className="txt-oflo">{this.state.data.nombre}</span>
          </td>
          <td>
            <h4>
              <span className={"badge badge-pill" + this.setBadge()}>
                {this.state.data.cupo - this.state.lista_alumnos.length}
              </span>
            </h4>
            <div>
              {/* {console.log(this.state.data)} */}
              <ModalAlumno estado={this.state.value} data={this.state.data} />
            </div>
          </td>
        </tr>
      )
    );
  }
}

export default AgendaTabsRow;