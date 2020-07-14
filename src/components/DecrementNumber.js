import React from "react";
import { Component } from "react";

class DecrementNumber extends Component {
  render() {
    let { number } = this.props;
    const { decrementNumber } = this.props.funcFromApp;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            decrementNumber();
          }}
        >
          -
        </button>
        <div>{"Number punya child IncrementNumber: " + number}</div>
      </div>
    );
  }
}

export default DecrementNumber;
