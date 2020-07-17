import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class TextInput extends Component {
  render() {
    const { type, value, onChange, className } = this.props;
    return (
      <Input
        className={className}
        focus
        type={type}
        value={value}
        onChange={onChange}
        // readOnly
      />
    );
  }
}

export default TextInput;
