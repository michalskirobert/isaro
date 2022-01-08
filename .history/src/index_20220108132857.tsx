import React from "react";
import Provider from "react-redux";
import ReactDOM from "react-dom";
import "@assets/style/index.scss";

import App from "./App";

import { configureStore } from "./store/config";

const storeConfig = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store: storeConfig.store }}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
