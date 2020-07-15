import React, { Component } from "react";
import InputText from "../inputs/InputText";
import Button from "../button/Button";

class FormContainer extends Component {
  render() {
    const { inputText, onAddBtnClick } = this.props;
    return (
      <div className="ui input" style={{ marginTop: "10px" }}>
        <InputText onChange={inputText.onChange} name={inputText.name} />
        <Button onClick={onAddBtnClick} color="green" text="Submit" />
      </div>
    );
  }
}

export default FormContainer;
