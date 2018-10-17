import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
  MemoryRouter
} from "react-router-dom";

import "./App.css";
import NavbarWhite from "./components/navbarWhite";
import Navbar from "./components/navbar";
import Agenda from "./components/agenda/agendaMain";
import Alumnos from "./components/alumnos/alumnosMain";
import AlumnosDetalle from "./components/alumnos/alumnosDetalle";
import Clases from "./components/clases/clasesMain";
import ClasesDetalle from "./components/clases/clasesDetalle";
import Profesores from "./components/profesores/profesoresMain";
import ProfesoresDetalle from "./components/profesores/profesoresDetalle";
import Sidebar from "./components/sidebar";

class App extends Component {
  state = {
    sidebar: "full",
    show: "show-sidebar"
  };

  togleSidebar = () => {
    if (this.state.show === "show-sidebar") this.setState({ show: "" });
    else this.setState({ show: "show-sidebar" });
  };
  handleResize = () => {
    if (window.innerWidth < 769) {
      this.setState({ sidebar: "mini-sidebar" });
      this.setState({ show: "" });
    } else {
      this.setState({ sidebar: "full" });
      this.setState({ show: "show-sidebar" });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <BrowserRouter>
        <div
          id="main-wrapper"
          data-navbarbg="skin6"
          data-theme="light"
          data-layout="vertical"
          data-sidebartype={this.state.sidebar}
          data-boxed-layout="full"
          className={
            this.state.show //mini-sidebar
          }
        >
          <header className="topbar" data-navbarbg="skin6">
            <NavbarWhite onClick={this.togleSidebar} />
          </header>
          <Sidebar />
          <main className="page-wrapper" style={{ display: "block" }}>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Agenda} />
                <Route
                  exact
                  path="/alumnos"
                  render={props => (
                    <Alumnos
                      {...props}
                      url={"/alumnos/"}
                      url_nuevo={"/alumnos/detalle/"}
                      url_detalle={"/alumnos/detalle/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/clases"
                  render={props => (
                    <Clases
                      {...props}
                      url={"/clases/"}
                      url_nuevo={"/clases/detalle/"}
                      url_detalle={"/clases/detalle/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profesores"
                  render={props => (
                    <Profesores
                      {...props}
                      url={"/profesores/"}
                      url_nuevo={"/profesores/detalle/"}
                      url_detalle={"/profesores/detalle/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/alumnos/detalle/:id"
                  render={props => (
                    <AlumnosDetalle
                      {...props}
                      url_main={"/alumnos/"}
                      url_select={"/clases/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/alumnos/detalle/"
                  render={props => (
                    <AlumnosDetalle
                      {...props}
                      url_main={"/alumnos/"}
                      url_select={"/clases/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/clases/detalle/:id"
                  component={ClasesDetalle}
                />
                <Route
                  exact
                  path="/clases/detalle/"
                  component={ClasesDetalle}
                />
                <Route
                  exact
                  path="/profesores/detalle/:id"
                  component={ProfesoresDetalle}
                />
                <Route
                  exact
                  path="/profesores/detalle/"
                  component={ProfesoresDetalle}
                />
              </Switch>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
