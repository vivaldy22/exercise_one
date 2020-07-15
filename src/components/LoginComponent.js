import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      checkWorking: false,
    };
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(`${this.state.username}, ${this.state.password}`);
  };

  handleCheckBox = (event) => {
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: event.target.checked,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div style={{ backgroundColor: "#aaa" }}>
        {/*Controlled Component*/}
        <form action="#">
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChangeInput}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChangeInput}
          />
          <label>
            <input
              name="checkWorking"
              type="checkbox"
              checked={this.state.checkWorking}
              onChange={this.handleCheckBox}
            />
            Bekerja
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
