import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./dist/css/style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
