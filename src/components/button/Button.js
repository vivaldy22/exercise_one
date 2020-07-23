import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, color, text, type, disabled } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
        className={"ui button " + color}
        disabled={disabled}
        style={{ margin: "10px 0 5px 10px" }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
