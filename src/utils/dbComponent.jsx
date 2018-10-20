// import React, { Component } from "react";

// class DBComponent extends Component {
//   constructor(props) {
//     super(props);

class DBComponent {
  constructor() {
    this.server_url = "http://localhost:8000";
    this.state = {
      error: null,
      items: []
    };
  }

  saveData = (url, formData, method, callback) => {
    fetch(this.server_url + url, {
      method: method,
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          this.state.error = res.statusText;
        } else {
          this.state.error = null;
          return res.json();
        }
      })
      .then(
        result => {
          this.state.items = result;
          callback(this.state);
        },
        error => {
          this.state.items = [];
          this.state.error = error;
          callback(this.state);
        }
      );
  };

  getData(url, callback) {
    fetch(this.server_url + url, {
      method: "GET"
    })
      .then(res => {
        if (!res.ok) {
          this.state.error = res.statusText;
        } else {
          this.state.error = null;
          return res.json();
        }
      })
      .then(
        result => {
          this.state.items = result;
          callback(this.state);
        },
        error => {
          this.state.items = [];
          this.state.error = error;
          callback(this.state);
        }
      );
  }
}

export { DBComponent };
