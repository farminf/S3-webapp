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
