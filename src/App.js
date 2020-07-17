import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import Header from "./components/header/Header";
import NumpadCalc from "./components/numpad/NumpadCalc";
import CalcDisplay from "./components/display/CalcDisplay";
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
    } else if (val == 0 && this.state.result.length === 0) {
      console.log("1");
      this.setState({
        result: "0",
      });
    } else if (
      (val.match(regexOp) && this.state.result.length === 0) ||
      (this.state.result[0] == 0 && val.match(/[()]/gm))
    ) {
      console.log("2");
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
      console.log("4");
      this.setState({
        result: this.state.result + val,
      });
    } else {
      console.log("5");
      this.setState({
        result: this.state.result + val,
      });
    }
    // console.log("MASUK 6");
    // this.setState({
    //   result: val,
    // });
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
        {/*<div className="calc-container">*/}
        {/*  <CalcDisplay*/}
        {/*    res={this.state.result}*/}
        {/*    onTxtChange={this.handleTxtChange}*/}
        {/*  />*/}
        {/*  <NumpadCalc*/}
        {/*    onClickNum={this.handleNumButtonClick}*/}
        {/*    onClickRes={this.handleResButtonClick}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
