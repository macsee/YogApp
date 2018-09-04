import React, { Component } from "react";

class NavbarWhite extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header" data-logobg="skin5">
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="#"
            onClick={this.props.onClick}
          >
            <i className="ti-menu ti-close" />
          </a>

          <div className="navbar-brand">
            <a href="index.html" className="logo">
              <b className="logo-icon">
                <img
                  src={require("../assets/images/logo-icon.png")}
                  alt="homepage"
                  className="dark-logo"
                />

                <img
                  src={require("../assets/images/logo-light-icon.png")}
                  alt="homepage"
                  className="light-logo"
                />
              </b>

              <span className="logo-text">
                <img
                  src={require("../assets/images/logo-text.png")}
                  alt="homepage"
                  className="dark-logo"
                />

                <img
                  src={require("../assets/images/logo-light-text.png")}
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
          </div>

          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href="javascript:void(0)"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more" />
          </a>
        </div>

        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin6"
        >
          <ul className="navbar-nav float-left mr-auto">
            {/* <li className="nav-item search-box">
              <a
                className="nav-link waves-effect waves-dark"
                href="javascript:void(0)"
              >
                <div className="d-flex align-items-center">
                  <i className="mdi mdi-magnify font-20 mr-1" />
                  <div className="ml-1 d-none d-sm-block">
                    <span>Search</span>
                  </div>
                </div>
              </a>
              <form className="app-search position-absolute">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search &amp; enter"
                />
                <a className="srh-btn">
                  <i className="ti-close" />
                </a>
              </form>
            </li> */}
          </ul>

          <ul className="navbar-nav float-right">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={require("../assets/images/users/1.jpg")}
                  alt="user"
                  className="rounded-circle"
                  width="31"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right user-dd animated">
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-user m-r-5 m-l-5" /> My Profile
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-wallet m-r-5 m-l-5" /> My Balance
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i className="ti-email m-r-5 m-l-5" /> Inbox
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarWhite;
