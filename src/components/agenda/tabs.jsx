import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Table from "./table";

class Tabs extends Component {
  constructor(props) {
    // console.log("Holis soy el constructor");
    super(props);
    let _dias = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"];

    this.toggle = this.toggle.bind(this);
    this.state = {
      dias: _dias,
      activeTab: _dias[this.props.fecha._d.getDay()]
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  // setActive = fecha => {
  //   console.log(this.state.activo);
  //   let activo = ["", "", "", "", "", "", ""];
  //   activo[this.props.fecha._d.getDay()] = " active";
  //   this.setState({ activo });
  // };

  getWeekDayDate = (fecha, dia) => {
    let dow = fecha.getDay();
    if (dow === 0) dow = 7;
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
      this.toggle(this.state.dias[this.props.fecha._d.getDay()]);
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
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "LU"
              })}
              onClick={() => {
                this.toggle("LU");
              }}
            >
              LU
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 1))}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "MA"
              })}
              onClick={() => {
                this.toggle("MA");
              }}
            >
              MA
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 2))}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "MI"
              })}
              onClick={() => {
                this.toggle("MI");
              }}
            >
              MI
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 3))}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "JU"
              })}
              onClick={() => {
                this.toggle("JU");
              }}
            >
              JU
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 4))}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "VI"
              })}
              onClick={() => {
                this.toggle("VI");
              }}
            >
              VI
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 5))}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "SA"
              })}
              onClick={() => {
                this.toggle("SA");
              }}
            >
              SA
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 6))}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "DO"
              })}
              onClick={() => {
                this.toggle("DO");
              }}
            >
              DO
              <br />
              {this.formatDate(this.getWeekDayDate(this.props.fecha._d, 7))}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="LU">
            Lunes
            <Table />
          </TabPane>
          <TabPane tabId="MA">
            Martes
            <Table />
          </TabPane>
          <TabPane tabId="MI">
            Miercoles
            <Table />
          </TabPane>
          <TabPane tabId="JU">
            Jueves
            <Table />
          </TabPane>
          <TabPane tabId="VI">
            Viernes
            <Table />
          </TabPane>
          <TabPane tabId="SA">
            Sabado
            <Table />
          </TabPane>
          <TabPane tabId="DO">
            Domingo
            <Table />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default Tabs;
