import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
