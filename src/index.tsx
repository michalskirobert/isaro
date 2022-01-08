import React from "react";
import ReactDOM from "react-dom";
import "@assets/style/index.scss";

import App from "./App";
import { Provider } from "react-redux";
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
