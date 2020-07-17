import React, { Component } from "react";
import CalcDisplay from "../display/CalcDisplay";
import NumpadCalc from "../numpad/NumpadCalc";

class Calculator extends Component {
  render() {
    const { res, onTxtChange, onClickNum, onClickRes } = this.props;
    return (
      <div className="calc-container">
        <CalcDisplay res={res} onTxtChange={onTxtChange} />
        <NumpadCalc onClickNum={onClickNum} onClickRes={onClickRes} />
      </div>
    );
  }
}

export default Calculator;
