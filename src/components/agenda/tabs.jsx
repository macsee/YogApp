import React, { Component } from "react";
import Table from "./table";

class Tabs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#lunes" role="tab">
              <span className="hidden-xs-down">
                Lunes <br /> 20/08
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#martes" role="tab">
              <span className="hidden-xs-down">
                Martes <br /> 21/08
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#miercoles"
              role="tab"
            >
              <span className="hidden-xs-down">
                Miercoles <br /> 22/08
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#jueves"
              role="tab"
            >
              <span className="hidden-xs-down">
                Jueves <br /> 23/08
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#viernes"
              role="tab"
            >
              <span className="hidden-xs-down">
                Viernes <br /> 24/08
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content tabcontent-border">
          <div className="tab-pane" id="lunes" role="tabpanel">
            <Table />
          </div>
          <div className="tab-pane" id="martes" role="tabpanel">
            <Table />
          </div>
          <div className="tab-pane" id="miercoles" role="tabpanel">
            <Table />
          </div>
          <div className="tab-pane active" id="jueves" role="tabpanel">
            <Table />
          </div>
          <div className="tab-pane" id="viernes" role="tabpanel">
            <Table />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tabs;
