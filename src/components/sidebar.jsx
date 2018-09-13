import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    agenda_li: "selected",
    agenda_i: "active",
    alumnos_li: "",
    alumnos_i: "",
    profesores_li: "",
    profesores_i: "",
    clases_li: "",
    clases_i: ""
  };

  setSelection = () => {
    console.log(window.location.pathname.split("/")[1]);
  };

  isActiveLi = (value) => {
    var section = window.location.pathname.split("/")[1];

    if (value === section)
      return "sidebar-item selected";
    else
      return "sidebar-item";
  };
  
  isActiveLink = (value) => {
    var section = window.location.pathname.split("/")[1];

    if (value === section)
      return "sidebar-link waves-effect waves-dark sidebar-link active";
    else
      return "sidebar-link waves-effect waves-dark sidebar-link";

  }

  render() {
    return (
      <aside className="left-sidebar" data-sidebarbg="skin5">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="in">
              <li className={this.isActiveLi("")}>
                <Link
                  className={this.isActiveLink("")}
                  to="/"
                >
                  <i className="mdi mdi-calendar-text" />
                  Agenda
                </Link>
              </li>
              <li className={this.isActiveLi("alumnos")}>
                <Link
                  className={this.isActiveLink("alumnos")}
                  to="/alumnos"
                >
                  <i className="mdi mdi-account" />
                  Alumnos
                </Link>
              </li>
              <li className={this.isActiveLi("profesores")}>
                <Link
                  className={this.isActiveLink("profesores")}
                  to="/profesores"
                >
                  <i className="mdi mdi-face" />
                  Profesores
                </Link>
              </li>
              <li className={this.isActiveLi("clases")}>
                <Link
                  className={this.isActiveLink("clases")}
                  to="/clases"
                >
                  <i className="mdi mdi-clipboard-outline" />
                  Clases
                </Link>
              </li>
              <li className={this.isActiveLi("facturacion")}>
                <Link
                  className={this.isActiveLink("facturacion")}
                  to="/facturacion"
                >
                  <i className="mdi mdi-book-open" />
                  Facturacion
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
