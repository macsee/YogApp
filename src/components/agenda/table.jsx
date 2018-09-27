import React, { Component } from "react";
import ModalAlumno from "./modalAlumno";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Table extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  showModal = id => {
    this.child.current.toggle(id);
  };

  state = {
    id: 1
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <ModalAlumno ref={this.child} />
        </div>
        <div className="card">
          <div className="card-body">
            <div className="float-left">
              <h4 className="card-title mb-0">Clases</h4>
            </div>
            <div className="float-right">
              <button
                className="btn btn-info waves-effect waves-light"
                type="button"
              >
                <i className="mdi mdi-playlist-plus" /> Agregar
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">HORA</th>
                  <th className="border-top-0">PROFESOR</th>
                  <th className="border-top-0">GRUPO</th>
                  <th className="border-top-0">CUPO</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() => this.showModal(this.state.id)}
                  className="row-click"
                >
                  <td className="txt-oflo">08:00 </td>
                  <td>
                    <span className="txt-oflo">Noelia Perez</span>
                  </td>
                  <td>
                    <span className="txt-oflo">Yoga A</span>
                  </td>
                  <td>
                    <h4>
                      <span className="badge badge-pill badge-success">7</span>
                    </h4>
                  </td>
                </tr>
                <tr
                  onClick={() => this.showModal(this.state.id)}
                  className="row-click"
                >
                  <td className="txt-oflo">09:00 </td>
                  <td>
                    <span className="txt-oflo">Noelia Perez</span>
                  </td>
                  <td>
                    <span className="txt-oflo">Yoga B</span>
                  </td>
                  <td>
                    <h4>
                      <span className="badge badge-pill badge-success">5</span>
                    </h4>
                  </td>
                </tr>
                <tr
                  onClick={() => this.showModal(this.state.id)}
                  className="row-click"
                >
                  <td className="txt-oflo">10:00 </td>
                  <td>
                    <span className="txt-oflo">Noelia Perez</span>
                  </td>
                  <td>
                    <span className="txt-oflo">Yoga C</span>
                  </td>
                  <td>
                    <h4>
                      <span className="badge badge-pill badge-warning">4</span>
                    </h4>
                  </td>
                </tr>
                <tr
                  onClick={() => this.showModal(this.state.id)}
                  className="row-click"
                >
                  <td className="txt-oflo">17:00 </td>
                  <td>
                    <span className="txt-oflo">Noelia Perez</span>
                  </td>
                  <td>
                    <span className="txt-oflo">Yoga D</span>
                  </td>
                  <td>
                    <h4>
                      <span className="badge badge-pill badge-danger">2</span>
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
