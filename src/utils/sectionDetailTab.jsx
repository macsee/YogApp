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

  submit = (formData, callback) => {
    const db = new DBComponent();

    if (this.props.idElement) {
      db.saveData(
        this.props.url_main + this.props.idElement + "/",
        formData,
        "PUT",
        x => {
          callback(x);
        }
      );
    } else {
      db.saveData(this.props.url_main, formData, "POST", x => {
        callback(x);
        this.props.history.push(this.props.url_detalle + x.items.pk + "/");
      });
    }
  };

  componentDidMount() {
    const dbSelect = new DBComponent();

    if (this.props.idElement) {
      const dbMain = new DBComponent();

      let url = this.props.url_main + this.props.idElement + "/";

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
        if (this.props.children) {
          return React.cloneElement(this.props.children, {
            main: this.state.resultData.items,
            select: this.state.selectData.items,
            submit: this.submit
            // url_main: this.props.url_main,
            // idElement: this.props.idElement
          });
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  }
}
export default SectionDetailTab;
