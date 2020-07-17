import React, { Component } from "react";
import InputText from "./InputText";
import Button from "../button/Button";

class MainInputContainer extends Component {
  render() {
    const {
      onAddBtnClick,
      onRemoveBtnClick,
      onTxtChange,
      valueMainTxt,
    } = this.props;
    return (
      <form>
        <InputText onTxtChange={onTxtChange} value={valueMainTxt} />
        <Button
          type="submit"
          onClick={onAddBtnClick}
          color="green"
          text="Add ToDo"
        />
        <Button onClick={onRemoveBtnClick} color="red" text="Remove All" />
      </form>
    );
  }
}

export default MainInputContainer;
