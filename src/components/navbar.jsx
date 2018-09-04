import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Agenda
        </Link>
        {/* <a className="navbar-brand" href="/">
          Agenda
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/alumnos">
                Alumnos
              </Link>
              {/* <a className="nav-link" href="/alumnos">
                Alumnos
              </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profesores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Clases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Facturacion
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Usuario
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">
                  Salir
                </a>
                <a className="dropdown-item" href="#">
                  Informacion
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
