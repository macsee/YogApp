import React, { Component } from "react";

class DetalleDatos extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <form action="#">
              <div className="form-body">
                <div className="card-body">
                  <div className="row p-t-20">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control"
                          placeholder="John doe"
                        />
                        <small className="form-control-feedback">
                          This is inline help
                        </small>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group has-danger">
                        <label className="control-label">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control-danger"
                          placeholder="12n"
                        />
                        <small className="form-control-feedback">
                          This field has error.
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group has-success">
                        <label className="control-label">Gender</label>
                        <select className="form-control custom-select">
                          <option value="">Male</option>
                          <option value="">Female</option>
                        </select>
                        <small className="form-control-feedback">
                          Select your gender
                        </small>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Date of Birth</label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Category</label>
                        <select
                          className="form-control custom-select"
                          data-placeholder="Choose a Category"
                          tabIndex="1"
                        >
                          <option value="Category 1">Category 1</option>
                          <option value="Category 2">Category 2</option>
                          <option value="Category 3">Category 5</option>
                          <option value="Category 4">Category 4</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Membership</label>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio11"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio11"
                          >
                            Free
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio22"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio22"
                          >
                            Paid
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <label>Street</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Post Code</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-actions">
                  <div className="card-body">
                    <button type="submit" className="btn btn-success">
                      <i className="fa fa-check" /> Save
                    </button>
                    <button type="button" className="btn btn-dark">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DetalleDatos;
