import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import Header from "./components/header/Header";
import Calculator from "./components/calculator/Calculator";

const regexOp = /[+\-*/%.]+/gm;
const regexLetterSymbol = /[a-zA-Z ~`!@#$^&_=,<>?:;"'\[\]{}|\\]+/gm;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  checkInput = (input) => {
    return input.match(regexLetterSymbol);
  };

  handleNumButtonClick = (e) => {
    const val = e.target.value;
    if (val === "CE") {
      this.setState({
        result: this.state.result.slice(0, -1),
      });
    } else if (val === "C") {
      this.setState({
        result: "",
      });
    } else if (val === "e") {
      this.setState({
        result: Math.E,
      });
    } else if (val === "π") {
      this.setState({
        result: Math.PI,
      });
    } else if (val === "xⁿ") {
      this.setState({
        result: this.state.result + "**",
      });
    } else if (val === "%") {
      this.handleResButtonClick();
      this.setState({
        result: this.state.result / 100,
      });
    } else if (val == 0 && this.state.result.length === 0) {
      this.setState({
        result: "0",
      });
    } else if (
      (val.match(regexOp) && this.state.result.length === 0) ||
      (this.state.result[0] == 0 && val.match(/[()]/gm))
    ) {
      this.setState({
        result: val,
      });
    } else if (
      val.match(regexOp) &&
      this.state.result[this.state.result.length - 1].match(regexOp)
    ) {
      console.log("3");
      this.setState({
        ...this.state.result,
      });
    } else if (
      (this.state.result[0] == 0 && val.match(regexOp)) ||
      (this.state.result[0] == 0 &&
        this.state.result[1].match(regexOp) &&
        val == 0)
    ) {
      this.setState({
        result: this.state.result + val,
      });
    } else {
      this.setState({
        result: this.state.result + val,
      });
    }
  };

  handleResButtonClick = () => {
    try {
      this.setState({
        // eslint-disable-next-line no-eval
        result: String(eval(this.state.result) || ""),
      });
    } catch (err) {
      this.setState({
        result: "",
      });
    }
  };

  handleTxtChange = (e) => {
    if (!this.checkInput(e.target.value)) {
      this.setState({
        result: e.target.value,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Calculator
          res={this.state.result}
          onTxtChange={this.handleTxtChange}
          onClickNum={this.handleNumButtonClick}
          onClickRes={this.handleResButtonClick}
        />
      </div>
    );
  }
}

export default App;
