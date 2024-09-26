import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import appReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger"

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(appReducer, applyMiddleware(logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
