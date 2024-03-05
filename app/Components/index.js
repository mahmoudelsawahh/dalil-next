import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import store from "../pages/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
      <Provider store={store}>
        <Layout />
      </Provider>
      </div>
    );
    root.render(element);
  }
  
  setInterval(tick, 1000);

  