import React, { Component } from "react";
import InputText from "../input/InputText";
import Button from "../button/Button";

class MainInputContainer extends Component {
  render() {
    const {
      onAddBtnClick,
      onRemoveBtnClick,
      onTxtChange,
      valueMainTxt,
      todosLen,
    } = this.props;

    return (
      <div className="input-container">
        <form>
          <InputText onTxtChange={onTxtChange} value={valueMainTxt} />
          <Button
            type="submit"
            onClick={onAddBtnClick}
            color="green"
            text="Add ToDo"
            disabled={!valueMainTxt}
          />
        </form>
        <Button
          onClick={onRemoveBtnClick}
          color="red"
          text="Remove All"
          disabled={!todosLen}
        />
      </div>
    );
  }
}

export default MainInputContainer;
