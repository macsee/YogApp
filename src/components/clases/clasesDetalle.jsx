import React, { Component } from "react";
import DetalleDatos from "./clasesDetalleDatos";
import { DBComponent } from "../../utils/dbComponent.jsx";

class Tabs extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {Object.keys(this.props.tabDatos.main).length !== 0
                  ? "Detalle Clase #" + this.props.tabDatos.main.pk
                  : "Nueva Clase"}
              </h4>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#datos"
                    role="tab"
                  >
                    <span className="hidden-xs-down">Datos</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content tabcontent-border">
                <div className="tab-pane active" id="datos" role="tabpanel">
                  <div className="col-md-12">
                    <DetalleDatos
                      main={this.props.tabDatos.main}
                      select={this.props.tabDatos.select}
                      url_main={this.props.tabDatos.url_main}

                      //   this.props.match.params.id === undefined
                      //     ? ""
                      //     : this.props.match.params.id
                      // }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ClasesDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null,
      selectData: null
    };
  }

  componentDidMount() {
    const dbSelect = new DBComponent();

    if (this.props.match.params.id) {
      const dbMain = new DBComponent();

      let url = this.props.url_main + this.props.match.params.id + "/";

      dbMain.getData(url, x => {
        this.setState({
          ...this.state,
          resultData: x
        });
      });
    } else {
      this.setState({
        ...this.state,
        resultData: { items: [] }
      });
    }

    dbSelect.getData(this.props.url_select, x => {
      this.setState({
        ...this.state,
        selectData: x
      });
    });
  }

  render() {
    if (this.state.resultData && this.state.selectData) {
      if (this.state.resultData.error || this.state.selectData.error) {
        return <h2>Error de conexión</h2>;
      } else {
        return (
          <Tabs
            tabDatos={{
              main: this.state.resultData.items,
              select: this.state.selectData.items,
              url_main: this.props.url_main
            }}
          />
        );
      }
    } else {
      return null;
    }
  }
}
export default ClasesDetalle;
