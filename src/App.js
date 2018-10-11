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
                <Route exact path="/alumnos" component={Alumnos} />
                <Route
                  exact
                  path="/alumnos/detalle/:id"
                  component={AlumnosDetalle}
                />
                <Route
                  exact
                  path="/alumnos/detalle/"
                  component={AlumnosDetalle}
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
