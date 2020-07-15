import React, { Component } from "react";
import InputText from "../input/InputText";
import Button from "../button/Button";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.value,
      isEditClicked: false,
    };
  }

  handleEditSaveBtnClick = () => {
    this.setState({
      isEditClicked: !this.state.isEditClicked,
    });
  };

  handleTxtChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  render() {
    const { onRmvBtn, id } = this.props;
    return (
      <div>
        <InputText
          disabled={!this.state.isEditClicked}
          value={this.state.todo}
          onTxtChange={this.handleTxtChange}
        />
        {this.state.isEditClicked ? (
          <Button
            color="blue"
            text="Save"
            onClick={this.handleEditSaveBtnClick}
          />
        ) : (
          <Button
            color="blue"
            text="Edit"
            onClick={this.handleEditSaveBtnClick}
          />
        )}
        <Button color="red" text="Delete" onClick={() => onRmvBtn(id)} />
      </div>
    );
  }
}

export default InputContainer;
