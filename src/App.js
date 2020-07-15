import React, { Component } from "react";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginComponent />
      </div>
    );
  }
}

export default App;
