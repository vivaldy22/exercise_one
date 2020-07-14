import React, { Component } from "react";

class LoginScreen extends Component {
  onBtnLoginClicked = () => {
    this.props.onAuth();
  };

  render() {
    return (
      <div>
        Login Screen
        <button onClick={this.onBtnLoginClicked}>Login</button>
      </div>
    );
  }
}

export default LoginScreen;
