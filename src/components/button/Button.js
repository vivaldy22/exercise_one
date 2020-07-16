import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <button
        onClick={onClick}
        className={"ui button"}
        value={text}
        style={{ margin: "5px", width: "80px" }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
