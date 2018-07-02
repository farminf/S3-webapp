/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:43:56
 * @modify date 2018-07-02 12:43:56
 * @desc [description]
 */
import React, { Component } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import ModalRoot from "./utils/rootModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalRoot />
        <AppRouter />
      </div>
    );
  }
}

export default App;
