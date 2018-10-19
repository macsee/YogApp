import React, { Component } from "react";
import { DBComponent } from "./dbComponent.jsx";

class SectionMainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null
    };
  }

  componentDidMount() {
    const db = new DBComponent();
    db.getData(this.props.url_main, x => {
      this.setState({
        ...this.state,
        resultData: x
      });
    });
  }

  nuevo = () => {
    this.props.history.push(this.props.url_nuevo);
  };

  verDetalle = id => {
    this.props.history.push(this.props.url_detalle + id);
  };

  render() {
    if (this.state.resultData) {
      if (!this.state.resultData.error) {
        return (
          <div className="card">
            <div className="card-body">
              <div className="float-left">
                <h4 className="card-title mb-0">{this.props.titulo}</h4>
              </div>
              <div className="float-right">
                <button
                  className="btn btn-info waves-effect waves-light"
                  type="button"
                  onClick={() => this.nuevo()}
                >
                  <i className="mdi mdi-playlist-plus" /> Nuevo
                </button>
              </div>
            </div>
            {this.props.children &&
              React.cloneElement(this.props.children, {
                data: this.state.resultData.items,
                detalle: this.verDetalle
              })}
          </div>
        );
      } else {
        return <h2> Error de conexion</h2>;
      }
    } else {
      return null;
    }
  }
}

export default SectionMainView;