import React, { Component } from "react";

class SectionDetailView extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...this.props })
    );

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">
                {this.props.idElement
                  ? "Detalle " +
                    this.props.titulo +
                    " # " +
                    this.props.idElement
                  : "Nuevo " + this.props.titulo}
              </h4>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs" role="tablist">
                {Object.keys(this.props.children).length !== 0
                  ? React.Children.map(this.props.children, (element, i) => (
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
                {/* {childrenWithProps} */}

                {Object.keys(this.props.children).length !== 0
                  ? React.Children.map(this.props.children, (element, i) => (
                      <div
                        key={i}
                        className={"tab-pane " + element.props.active}
                        id={element.props.id}
                        role="tabpanel"
                      >
                        <div className="col-md-12">{element}</div>
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
