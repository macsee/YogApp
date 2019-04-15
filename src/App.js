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
// import Navbar from "./components/navbar";
import Agenda from "./components/agenda/agendaMain";
// import Alumnos from "./components/alumnos/alumnosMain";
import SectionMainView from "./utils/sectionMainView";
import SectionDetailView from "./utils/sectionDetailView";
import SectionDetailTab from "./utils/sectionDetailTab";

import AlumnoListado from "./components/alumnos/alumnoListado";
import AlumnoDatos from "./components/alumnos/alumnoDatos";
import AlumnoPagos from "./components/alumnos/alumnoPagos";
import AlumnoAsistencias from "./components/alumnos/alumnoAsistencias";

import ClaseListado from "./components/clases/claseListado";
import ClaseDatos from "./components/clases/claseDatos";

import ProfesorListado from "./components/profesores/profesorListado";
import ProfesorDatos from "./components/profesores/profesorDatos";

// import Profesores from "./components/profesores/profesores";
// import ProfesorDatos from "./components/profesores/profesorDatos";
// import AlumnosDetalle from "./components/alumnos/alumnosDetalle";
// import Clases from "./components/clases/clasesMain";
// import ClasesDetalle from "./components/clases/clasesDetalle";
// import Profesores from "./components/profesores/profesoresMain";
// import ProfesoresDetalle from "./components/profesores/profesoresDetalle";
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
                  key="/alumnos"
                  render={props => (
                    <SectionMainView
                      {...props}
                      titulo={"Alumnos"}
                      url_main={"/alumnos/"}
                      url_nuevo={"/alumnos/nuevo/"}
                      url_detalle={"/alumnos/detalle/"}
                    >
                      <AlumnoListado />
                    </SectionMainView>
                  )}
                />
                <Route
                  exact
                  path="/clases"
                  key="/clases"
                  render={props => (
                    <SectionMainView
                      {...props}
                      titulo={"Clases"}
                      url_main={"/clases/"}
                      url_nuevo={"/clases/nuevo/"}
                      url_detalle={"/clases/detalle/"}
                    >
                      <ClaseListado />
                    </SectionMainView>
                  )}
                />
                <Route
                  exact
                  path="/profesores"
                  key="/profesores"
                  render={props => (
                    <SectionMainView
                      {...props}
                      titulo={"Profesores"}
                      url_main={"/profesores/"}
                      url_nuevo={"/profesores/nuevo/"}
                      url_detalle={"/profesores/detalle/"}
                    >
                      <ProfesorListado />
                    </SectionMainView>
                  )}
                />
                <Route
                  exact
                  path="/alumnos/nuevo/"
                  render={props => (
                    <SectionDetailView titulo={"Alumno"}>
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                        url_main={"/alumnos/"}
                        url_select={"/clases/"}
                        url_detalle={"/alumnos/detalle/"}
                        history={props.history}
                      >
                        <AlumnoDatos />
                      </SectionDetailTab>
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/alumnos/detalle/:id"
                  render={props => (
                    <SectionDetailView
                      titulo={"Alumno"}
                      idElement={props.match.params.id}
                    >
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                        url_new={"/alumnos/create/"}
                        url_main={"/alumnos/"}
                        url_select={"/clases/"}
                      >
                        <AlumnoDatos />
                      </SectionDetailTab>
                      <SectionDetailTab
                        active={""}
                        nombre={"Pagos"}
                        id={"pagos"}
                        url_main={"/cuenta_corriente/"}
                        url_select={""}
                      >
                        <AlumnoPagos />
                      </SectionDetailTab>
                      <SectionDetailTab
                        active={""}
                        nombre={"Asistencias"}
                        id={"asistencias"}
                        url_main={"/asistencias/"}
                        url_select={""}
                      >
                        <AlumnoAsistencias />
                      </SectionDetailTab>
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/clases/nuevo/"
                  render={props => (
                    <SectionDetailView titulo={"Clases"}>
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                        url_main={"/clases/"}
                        url_select={"/profesores/"}
                        url_detalle={"/clases/detalle/"}
                        history={props.history}
                      >
                        <ClaseDatos />
                      </SectionDetailTab>
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/clases/detalle/:id"
                  render={props => (
                    <SectionDetailView
                      titulo={"Clases"}
                      idElement={props.match.params.id}
                    >
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                        url_main={"/clases/"}
                        url_select={"/profesores/"}
                      >
                        <ClaseDatos />
                      </SectionDetailTab>
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/profesores/nuevo/"
                  render={props => (
                    <SectionDetailView titulo={"Profesores"}>
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                        url_main={"/profesores/"}
                        url_select={"/especialidades/"}
                        url_detalle={"/profesores/detalle/"}
                        history={props.history}
                      >
                        <ProfesorDatos />
                      </SectionDetailTab>
                    </SectionDetailView>
                  )}
                />
                <Route
                  exact
                  path="/profesores/detalle/:id"
                  render={props => (
                    <SectionDetailView
                      titulo={"Profesores"}
                      idElement={props.match.params.id}
                    >
                      <SectionDetailTab
                        active={"active"}
                        nombre={"Datos"}
                        id={"datos"}
                        url_main={"/profesores/"}
                        url_select={"/especialidades/"}
                      >
                        <ProfesorDatos />
                      </SectionDetailTab>
                    </SectionDetailView>
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
