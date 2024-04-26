import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
// import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD:netflix-ui/src/index.js
    {/* FIXME: The line bellow <Provider store={store}>
     */}
    <Provider>
      <App />
    </Provider>
=======
    {/* TODO: FIXME: THE CODE BELLOW  */}
    {/* <Provider store={store}> */}

    {/* <Provider> */}
    <App />
    {/* </Provider> */}
>>>>>>> d3b9c48 (folder structure updated):client/src/index.js
  </React.StrictMode>
);
