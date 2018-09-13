import React, { Component } from "react";

class DetalleAsistencias extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="border-top-0">FECHA</th>
                <th className="border-top-0">HORA</th>
                <th className="border-top-0">CLASE</th>
                <th className="border-top-0">PROFESOR</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
              <tr onClick={this.click}>
                <td>
                  <span className="txt-oflo">01/09/18</span>
                </td>
                <td>
                  <span className="txt-oflo">08:00</span>
                </td>
                <td>
                  <span className="txt-oflo">Yoga A</span>
                </td>
                <td>
                  <span className="txt-oflo">Noelia Perez</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DetalleAsistencias;
