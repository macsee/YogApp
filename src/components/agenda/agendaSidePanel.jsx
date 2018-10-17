import React, { Component } from "react";

class Sidepanel extends Component {
  state = {};

  render() {
    // const starterTemplate = {
    //   padding: "3rem 1.5rem",
    //   textAlign: "center"
    // };

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Eventos</h4>
        </div>
        <div className="comment-widgets scrollable">
          <div className="d-flex flex-row comment-row m-t-0">
            <div className="p-2">
              <img
                src={require("../../assets/images/users/1.jpg")}
                alt="user"
                width="50"
                className="rounded-circle"
              />
            </div>
            <div className="comment-text w-100">
              <h6 className="font-medium">James Anderson</h6>
              <span className="m-b-15 d-block">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </span>
              <div className="comment-footer">
                <span className="text-muted float-right">April 14, 2016</span>
                {/* <span className="label label-rounded label-primary">
                  Pending
                </span>
                <span className="action-icons">
                  <a href="javascript:void(0)">
                    <i className="ti-pencil-alt" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti-check" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti-heart" />
                  </a>
                </span> */}
              </div>
            </div>
          </div>
          <div className="d-flex flex-row comment-row">
            <div className="p-2">
              <img
                src={require("../../assets/images/users/1.jpg")}
                alt="user"
                width="50"
                className="rounded-circle"
              />
            </div>
            <div className="comment-text active w-100">
              <h6 className="font-medium">Michael Jorden</h6>
              <span className="m-b-15 d-block">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </span>
              <div className="comment-footer ">
                <span className="text-muted float-right">April 14, 2016</span>
                {/* <span className="label label-success label-rounded">
                  Approved
                </span>
                <span className="action-icons active">
                  <a href="javascript:void(0)">
                    <i className="ti-pencil-alt" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="icon-close" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti-heart text-danger" />
                  </a>
                </span> */}
              </div>
            </div>
          </div>
          <div className="d-flex flex-row comment-row">
            <div className="p-2">
              <img
                src={require("../../assets/images/users/1.jpg")}
                alt="user"
                width="50"
                className="rounded-circle"
              />
            </div>
            <div className="comment-text w-100">
              <h6 className="font-medium">Johnathan Doeting</h6>
              <span className="m-b-15 d-block">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </span>
              <div className="comment-footer">
                <span className="text-muted float-right">April 14, 2016</span>
                {/* <span className="label label-rounded label-danger">
                  Rejected
                </span>
                <span className="action-icons">
                  <a href="javascript:void(0)">
                    <i className="ti-pencil-alt" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti-check" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="ti-heart" />
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidepanel;
