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
// import Alumnos from "./components/alumnos/alumnosMain";
import SectionMainView from "./utils/sectionMainView";
import SectionDetailView from "./utils/sectionDetailView";
import Alumnos from "./components/alumnos/alumnos";
import AlumnosDetalle from "./components/alumnos/alumnosDetalle";
import Clases from "./components/clases/clasesMain";
import ClasesDetalle from "./components/clases/clasesDetalle";
import Profesores from "./components/profesores/profesoresMain";
import ProfesoresDetalle from "./components/profesores/profesoresDetalle";
import Sidebar from "./components/sidebar";
import SectionDetailTab from "./utils/sectionDetailTab";

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
                    <SectionMainView
                      {...props}
                      titulo={"Alumnos"}
                      url_main={"/alumnos/"}
                      url_nuevo={"/alumnos/detalle/"}
                      url_detalle={"/alumnos/detalle/"}
                    >
                      <Alumnos />
                    </SectionMainView>
                  )}
                />
                <Route
                  exact
                  path="/clases"
                  render={props => (
                    <Clases
                      {...props}
                      url_main={"/clases/"}
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
                      url_main={"/profesores/"}
                      url_nuevo={"/profesores/detalle/"}
                      url_detalle={"/profesores/detalle/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/alumnos/detalle/:id"
                  render={props => (
                    <SectionDetailView
                      {...props}
                      titulo={"Alumno"}
                      // tabs={[
                      //   { nombre: "Datos", active: "active", id: "datos" },
                      //   { nombre: "Pagos", active: "", id: "pagos" },
                      //   {
                      //     nombre: "Asistencias",
                      //     "": "active",
                      //     id: "asistencias"
                      //   }
                      // ]}
                    >
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                      >
                        <Alumnos
                          url_main={"/alumnos/"}
                          url_select={"/clases/"}
                        />
                      </SectionDetailTab>
                      <SectionDetailTab
                        active={""}
                        nombre={"Pagos"}
                        id={"pagos"}
                      >
                        <Alumnos
                          url_main={"/alumnos/"}
                          url_select={"/clases/"}
                        />
                      </SectionDetailTab>
                      <SectionDetailTab
                        active={""}
                        nombre={"Asistencias"}
                        id={"asistencias"}
                      >
                        <Alumnos
                          url_main={"/alumnos/"}
                          url_select={"/clases/"}
                        />
                      </SectionDetailTab>
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/alumnos/detalle/"
                  render={props => (
                    <SectionDetailView
                      {...props}
                      titulo={"Alumno"}
                      url_main={"/alumnos/"}
                      url_select={"/clases/"}
                    >
                      <Alumnos />
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/clases/detalle/:id"
                  render={props => (
                    <ClasesDetalle
                      {...props}
                      url_main={"/clases/"}
                      url_select={"/profesores/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/clases/detalle/"
                  render={props => (
                    <ClasesDetalle
                      {...props}
                      url_main={"/clases/"}
                      url_select={"/profesores/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profesores/detalle/:id"
                  render={props => (
                    <ProfesoresDetalle
                      {...props}
                      url_main={"/profesores/"}
                      url_select={"/especialidades/"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profesores/detalle/"
                  render={props => (
                    <ProfesoresDetalle
                      {...props}
                      url_main={"/profesores/"}
                      url_select={"/especialidades/"}
                    />
                  )}
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
