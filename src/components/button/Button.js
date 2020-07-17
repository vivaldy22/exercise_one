import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, color, text, type } = this.props;
    return (
      <button
        type={type}
        onClick={onClick}
        className={"ui button " + color}
        style={{ margin: "5px 0px 5px 10px" }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
