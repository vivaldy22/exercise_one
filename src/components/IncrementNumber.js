import React from "react";
import { Component } from "react";

class IncrementNumber extends Component {
  render() {
    let { number } = this.props;
    const { incrementNumber } = this.props.funcFromApp;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            incrementNumber();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default IncrementNumber;
