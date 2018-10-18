import React, { Component } from "react";
import SectionDetailTab from "./sectionDetailTab";

class SectionDetailView extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {Object.keys(this.props.match.params).length !== 0
                  ? "Detalle " +
                    this.props.titulo +
                    " # " +
                    this.props.match.params.id
                  : "Nuevo " + this.props.titulo}
              </h4>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs" role="tablist">
                {this.props.children.length !== 0
                  ? this.props.children.map((element, i) => (
                      <li key={i} className="nav-item">
                        <a
                          className={"nav-link " + element.props.active}
                          data-toggle="tab"
                          href={"#" + element.props.id}
                          role="tab"
                        >
                          <span className="hidden-xs-down">
                            {element.props.nombre}
                          </span>
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
              <div className="tab-content tabcontent-border">
                {this.props.children.length !== 0
                  ? this.props.children.map((element, i) => (
                      <div
                        key={i}
                        className={"tab-pane " + element.props.active}
                        id={element.props.id}
                        role="tabpanel"
                      >
                        <div className="col-md-12">
                          {React.cloneElement(element, { ...this.props })}
                        </div>
                        <div />
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SectionDetailView;

{
  /* <DetalleDatos
                        main={this.props.tabDatos.main}
                        select={this.props.tabDatos.select}
                        url_main={this.props.tabDatos.url_main} */
}
