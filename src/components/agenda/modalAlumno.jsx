import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button> */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            08:00 - Noelia Perez - Yoga A
          </ModalHeader>
          <ModalBody>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">#</th>
                  <th className="border-top-0">ALUMNO</th>
                  <th className="border-top-0">PRESENTE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="txt-oflo">1 </td>
                  <td>
                    <span className="txt-oflo">Juan Perez</span>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label todo-label"
                        htmlFor="customCheck1"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="txt-oflo">2 </td>
                  <td>
                    <span className="txt-oflo">Carlos Martinez</span>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                      />
                      <label
                        className="custom-control-label todo-label"
                        htmlFor="customCheck2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="txt-oflo">3 </td>
                  <td>
                    <span className="txt-oflo">Rosa Alvarez</span>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck3"
                      />
                      <label
                        className="custom-control-label todo-label"
                        htmlFor="customCheck3"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>
              Guardar
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAlumno;
