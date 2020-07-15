import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, color, text } = this.props;
    return (
      <button
        onClick={onClick}
        className={"ui button " + color}
        style={{ margin: "5px" }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
