import React, { Component } from "react";
import InputText from "./InputText";
import Button from "../button/Button";

class MainInputContainer extends Component {
  render() {
    const { onClick, onTxtChange, valueMainTxt } = this.props;
    return (
      <div>
        <InputText onTxtChange={onTxtChange} value={valueMainTxt} />
        <Button onClick={onClick} color="green" text="Add ToDo" />
      </div>
    );
  }
}

export default MainInputContainer;
