import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import Header from "./components/header/Header";
import TextInput from "./components/input/TextInput";
import NumpadCalc from "./components/numpad/NumpadCalc";
import CalcDisplay from "./components/display/CalcDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  handleNumButtonClick = (e) => {
    const val = e.target.value;
    if (val === "CE") {
      this.setState({
        result: this.state.result.slice(0, -1),
      });
    } else if (val === "C" || (val == 0 && this.state.result.length === 0)) {
      this.setState({
        result: "",
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
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "",
      });
    }
  };

  checkInput = (input) => {
    return input.match(/[a-zA-Z ~`!@#$^&_=,<>?:;"'\[\]{}|\\]+/gm);
  };

  handleTxtChange = (e) => {
    if (!this.checkInput(e.target.value)) {
      this.setState({
        result: e.target.value,
      });
    }
  };

  render() {
    console.log(this.state.result);
    return (
      <div className="App">
        <Header />
        <div className="calc-container">
          <CalcDisplay
            res={this.state.result}
            onTxtChange={this.handleTxtChange}
          />
          <NumpadCalc
            onClickNum={this.handleNumButtonClick}
            onClickRes={this.handleResButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
