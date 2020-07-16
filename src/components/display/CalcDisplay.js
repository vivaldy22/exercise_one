import React, { Component } from "react";
import TextInput from "../input/TextInput";

class CalcDisplay extends Component {
  render() {
    const { res, onTxtChange } = this.props;
    return (
      <div className="calc-display">
        <TextInput
          className="calc-display-text"
          type="text"
          value={res}
          onChange={onTxtChange}
        />
      </div>
    );
  }
}

export default CalcDisplay;
