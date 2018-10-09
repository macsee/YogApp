import React, { Component } from "react";

import Tabs from "./tabs";
import Sidepanel from "./sidepanel";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    moment.locale("LOCALE", {
      week: {
        dow: 1
      }
    });
  }

  handleChange(date) {
    this.setState({ ...this.state, startDate: date });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-white">
              <div className="form-group row">
                <label className="col-md-4 control-label col-form-label">
                  <h4>Fecha Seleccionada</h4>
                </label>
                <DatePicker
                  dateFormat="DD/MM/YYYY"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  locale="es-spa"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-body">
              <Tabs fecha={this.state.startDate} />
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
