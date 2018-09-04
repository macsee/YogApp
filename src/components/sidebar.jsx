import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <aside className="left-sidebar" data-sidebarbg="skin5">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="in">
              <li className="sidebar-item selected">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link active"
                  to="/"
                >
                  <i className="mdi mdi-calendar-text" />
                  Agenda
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/alumnos"
                >
                  <i className="mdi mdi-account" />
                  Alumnos
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/profesores"
                >
                  <i className="mdi mdi-face" />
                  Profesores
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  to="/clases"
                >
                  <i className="mdi mdi-clipboard-outline" />
                  Clases
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link waves-effect waves-dark sidebar-link"
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
