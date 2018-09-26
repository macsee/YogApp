import React, { Component } from "react";
import Table from "./table";

class Tabs extends Component {
  state = {
    activo: ["", "", "", "", "", "", ""]
  };

  constructor(props) {
    // console.log("Holis soy el constructor");
    super(props);
    this.state.activo[this.props.fecha._d.getDay()] = " active";
    // this.setWeek(this.props.fecha._d);
  }

  setActive = fecha => {
    console.log(this.state.activo);
    let activo = ["", "", "", "", "", "", ""];
    activo[this.props.fecha._d.getDay()] = " active";
    this.setState({ activo });
  };

  getWeekDayDate = (fecha, dia) => {
    let dow = fecha.getDay();
    return new Date(fecha.getTime() - (dow - dia) * 24 * 60 * 60 * 1000);
  };

  formatDate = dia => {
    let month = dia.getMonth();
    let day = dia.getDate();
    if (dia.getMonth() < 10) month = "0" + month;
    if (dia.getDate() < 10) day = "0" + day;
    return day + "/" + month;
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.fecha !== prevProps.fecha) {
      this.setActive(this.props.fecha._d);
    }
  }

  // componentWillMount() {
  //   this.setWeek(this.props.fecha._d);
  //   this.setActive(this.props.fecha._d);
  // }
  render() {
    // console.log(this.state.dias);
    return (
      <React.Fragment>
        {/* <h2>{this.props.fecha.date()}</h2> */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[1]}
              data-toggle="tab"
              href="#lunes"
              role="tab"
            >
              <span className="hidden-xs-down">
                Lunes <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 1))}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[2]}
              data-toggle="tab"
              href="#martes"
              role="tab"
            >
              <span className="hidden-xs-down">
                Martes <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 2))}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[3]}
              data-toggle="tab"
              href="#miercoles"
              role="tab"
            >
              <span className="hidden-xs-down">
                Miercoles <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 3))}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[4]}
              data-toggle="tab"
              href="#jueves"
              role="tab"
            >
              <span className="hidden-xs-down">
                Jueves <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 4))}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[5]}
              data-toggle="tab"
              href="#viernes"
              role="tab"
            >
              <span className="hidden-xs-down">
                Viernes <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 5))}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[6]}
              data-toggle="tab"
              href="#sabado"
              role="tab"
            >
              <span className="hidden-xs-down">
                Sabado <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 6))}
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={"nav-link" + this.state.activo[0]}
              data-toggle="tab"
              href="#domingo"
              role="tab"
            >
              <span className="hidden-xs-down">
                Domingo <br />
                {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 7))}
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content tabcontent-border">
          <div
            className={"tab-pane" + this.state.activo[1]}
            id="lunes"
            role="tabpanel"
          >
            Lunes
            <Table />
          </div>
          <div
            className={"tab-pane" + this.state.activo[2]}
            id="martes"
            role="tabpanel"
          >
            Martes
            <Table />
          </div>
          <div
            className={"tab-pane" + this.state.activo[3]}
            id="miercoles"
            role="tabpanel"
          >
            Miercoles
            <Table />
          </div>
          <div
            className={"tab-pane" + this.state.activo[4]}
            id="jueves"
            role="tabpanel"
          >
            Jueves
            <Table />
          </div>
          <div
            className={"tab-pane" + this.state.activo[5]}
            id="viernes"
            role="tabpanel"
          >
            Viernes
            <Table />
          </div>
          <div
            className={"tab-pane" + this.state.activo[6]}
            id="sabado"
            role="tabpanel"
          >
            Sabado
            <Table />
          </div>
          <div
            className={"tab-pane" + this.state.activo[0]}
            id="domingo"
            role="tabpanel"
          >
            Domingo
            <Table />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tabs;
