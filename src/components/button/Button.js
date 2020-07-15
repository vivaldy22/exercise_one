import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, color, text } = this.props;
    return (
      <button
        onClick={onClick}
        className={"ui button " + color}
        style={{ marginLeft: "10px" }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
