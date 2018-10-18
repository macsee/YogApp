import React, { Component } from "react";

import { DBComponent } from "./dbComponent.jsx";

class SectionDetailTab extends Component {
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
          <h2>{this.props.nombre}</h2>
          //   <Tabs
          //     tabDatos={{
          //       main: this.state.resultData.items,
          //       select: this.state.selectData.items,
          //       url_main: this.props.url_main
          //     }}
          //     tabAsistencias={this.state.asistencias}
          //     tabPagos={this.state.pagos}
          //   />
        );
      }
    } else {
      return null;
    }
  }
}
export default SectionDetailTab;
