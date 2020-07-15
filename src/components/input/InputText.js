import React, { Component } from "react";

class InputText extends Component {
  render() {
    const { disabled, onTxtChange, value } = this.props;
    return (
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={onTxtChange}
      />
    );
  }
}

export default InputText;
