import React, { Component } from "react";

import Tabs from "./tabs";
import Sidepanel from "./sidepanel";

class Agenda extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Semana del 20/08 al 26/08</h4>
              <Tabs />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Sidepanel />
        </div>
      </div>
    );
  }
}

export default Agenda;
