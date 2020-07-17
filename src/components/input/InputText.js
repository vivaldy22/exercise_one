import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class InputText extends Component {
  render() {
    const { disabled, onTxtChange, value } = this.props;

    return (
      <Input
        type="text"
        focus
        value={value}
        disabled={disabled}
        onChange={onTxtChange}
      />
    );
  }
}

export default InputText;
