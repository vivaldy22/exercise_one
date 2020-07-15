import React, { Component } from "react";
import InputText from "../input/InputText";
import Button from "../button/Button";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      todo: this.props.value,
      isEditClicked: false,
    };
  }

  handleEditBtnClick = () => {
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
          onChange={this.handleTxtChange}
        />
        {id}
        {this.state.isEditClicked ? (
          <Button color="blue" text="Save" onClick={this.handleEditBtnClick} />
        ) : (
          <Button color="blue" text="Edit" onClick={this.handleEditBtnClick} />
        )}
        <Button color="red" text="Delete" onClick={(id) => onRmvBtn(id)} />
      </div>
    );
  }
}

export default InputContainer;
