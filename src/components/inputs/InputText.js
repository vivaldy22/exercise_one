import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class InputText extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <Input
        name="inputName"
        focus
        placeholder="Insert Name..."
        onChange={onChange}
        value={name}
        type="text"
      />
    );
  }
}

export default InputText;
