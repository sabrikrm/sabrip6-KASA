import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ReactDOM pour s'attacher à notre HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));

// le composant parent App.js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
